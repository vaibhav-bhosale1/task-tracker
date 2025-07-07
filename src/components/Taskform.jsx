// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAddTask, onEditTask, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Effect to pre-fill form when editingTask changes
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Task title is required!');
      return;
    }

    if (editingTask) {
      // Editing existing task
      onEditTask({
        ...editingTask,
        title: title.trim(),
        description: description.trim(),
      });
      setEditingTask(null); // Clear editing state
    } else {
      // Adding new task
      const newTask = {
        id: Date.now(), // Simple unique ID
        title: title.trim(),
        description: description.trim(),
        completed: false,
        createdAt: new Date().toISOString(), // Display creation date/time 
      };
      onAddTask(newTask);
    }

    // Clear form fields
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-form-container">
      <h3>{editingTask ? 'Edit Task' : 'Add New Task'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskTitle">Title:</label>
          <input
            type="text"
            id="taskTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="e.g., Buy groceries"
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskDescription">Description (Optional):</label>
          <textarea
            id="taskDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            placeholder="e.g., Milk, eggs, bread"
          ></textarea>
        </div>
        <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
        {editingTask && (
          <button type="button" onClick={() => setEditingTask(null)} className="cancel-button">
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default TaskForm;