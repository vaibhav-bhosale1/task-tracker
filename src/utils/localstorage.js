// src/utils/localStorage.js

const TASK_STORAGE_KEY = 'tasks';

export const saveTasks = (tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem(TASK_STORAGE_KEY, serializedTasks);
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

export const loadTasks = () => {
  try {
    const serializedTasks = localStorage.getItem(TASK_STORAGE_KEY);
    if (serializedTasks === null) {
      return []; // No tasks found, return empty array
    }
    return JSON.parse(serializedTasks);
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    return []; // Return empty array in case of error
  }
};