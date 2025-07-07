// src/components/TaskDashboard.js
import React, { useState, useEffect } from 'react';
import TaskForm from './Taskform';
import TaskList from './TaskList';
import { saveTasks, loadTasks } from '../utils/localstorage'; // Import localStorage helpers 

const TaskDashboard = ({ username }) => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // State for editing task
  const [filter, setFilter] = useState('All'); // For future filtering

  useEffect(() => {
    // Load tasks from localStorage when the component mounts 
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever the tasks state changes 
    saveTasks(tasks);
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Filter tasks based on the current filter state (for future TaskFiltering step)
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') {
      return task.completed;
    } else if (filter === 'Pending') {
      return !task.completed;
    }
    return true; // 'All' tasks
  });

  return (
    <div className="task-dashboard-container">
      <h2>Your Tasks, {username}!</h2>
      <TaskForm
        onAddTask={handleAddTask}
        onEditTask={handleEditTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <hr /> {/* Separator */}
      <TaskList
        tasks={filteredTasks} // Pass filtered tasks
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
        onEditClick={setEditingTask} // Pass function to set task for editing
        filter={filter} // Pass filter for "No tasks found" message
      />
    </div>
  );
};

export default TaskDashboard;