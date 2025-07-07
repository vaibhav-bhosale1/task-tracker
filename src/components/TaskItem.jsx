// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDeleteTask, onEditClick }) => {
  const handleDelete = () => {
    // Prompt confirmation before deletion 
    if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}> {/* Visual distinction  */}
      <div className="task-content">
       <input
  type="checkbox"
  checked={task.completed}
  onChange={() => onToggleComplete(task.id)} // Toggle Complete
/>
        
        <div>
          <h4>{task.title}</h4> {/* Show task title  */}
          {task.description && <p>{task.description}</p>} {/* Show task description  */}
          <small>Created: {new Date(task.createdAt).toLocaleString()}</small> {/* Display creation date/time  */}
        </div>
      </div>
      <div className="task-actions">
        <button onClick={() => onEditClick(task)} className="edit-button">Edit</button> {/* Edit Task  */}
        <button onClick={handleDelete} className="delete-button">Delete</button> {/* Delete Task  */}
      </div>
    </div>
  );
};

export default TaskItem;