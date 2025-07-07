// src/components/TaskFilter.js
import React from 'react';

const TaskFilter = ({ currentFilter, onSetFilter, tasks }) => {
  // Calculate counts for each filter
  const allCount = tasks.length;
  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="task-filter-container">
      <button
        className={currentFilter === 'All' ? 'active' : ''}
        onClick={() => onSetFilter('All')}
      >
        All ({allCount})
      </button>
      <button
        className={currentFilter === 'Completed' ? 'active' : ''}
        onClick={() => onSetFilter('Completed')}
      >
        Completed ({completedCount})
      </button>
      <button
        className={currentFilter === 'Pending' ? 'active' : ''}
        onClick={() => onSetFilter('Pending')}
      >
        Pending ({pendingCount})
      </button>
    </div>
  );
};

export default TaskFilter;