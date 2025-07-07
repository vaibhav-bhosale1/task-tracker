// src/components/TaskDashboard.js
import React, { useState, useEffect } from 'react';
import TaskForm from './Taskform';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter'; // Import TaskFilter
import { saveTasks, loadTasks } from '../utils/localstorage';

const TaskDashboard = ({ username }) => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('All'); // State to hold the current filter

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
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

  // Logic to filter tasks based on the `filter` state
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
      <hr />

      {/* Integrate TaskFilter here */}
      <TaskFilter
        currentFilter={filter}
        onSetFilter={setFilter} // Pass setFilter to update the filter state
        tasks={tasks} // Pass all tasks for count calculation
      />
      <hr />

      <TaskList
        tasks={filteredTasks} // Pass the filtered tasks to TaskList
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
        onEditClick={setEditingTask}
        filter={filter} // Pass filter for "No tasks found" message
      />
    </div>
  );
};

export default TaskDashboard;