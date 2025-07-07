// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onEditClick, filter }) => {
  // Simple check for no tasks
  if (tasks.length === 0) {
    return <p className="no-tasks-message">No {filter.toLowerCase()} tasks found.</p>;
  }

  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
};

export default TaskList;