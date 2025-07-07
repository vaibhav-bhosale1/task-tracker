// src/components/TaskDashboard.js
import React from 'react';

const TaskDashboard = ({ username }) => {
  return (
    <div className="task-dashboard-container">
      <h2>Welcome to your Task Dashboard, {username}!</h2>
      <p>This is where your tasks will be managed.</p>
      {/* Task management components will go here */}
    </div>
  );
};

export default TaskDashboard;