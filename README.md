
# Personal Task Tracker Application

## Project Overview

This is a simple personal task management application built with React.js. It allows users to log in, add new tasks, manage existing tasks (edit, delete, mark as complete), and filter tasks based on their completion status. All task data and login status are persisted locally using `localStorage`.

## Features

* **Simple User Login:**
    * Basic login form with username input.
    * Username is stored in `localStorage` for persistence.
    * Redirects to the task dashboard upon successful login.
    * Logout functionality.
* **Task Management (CRUD Operations):**
    * **Add Task:** Form to add new tasks with a title (required) and optional description.
    * **Edit Task:** Tasks can be edited directly via the form, pre-filling with existing details.
    * **Delete Task:** Tasks can be deleted with a confirmation prompt.
    * **Toggle Complete:** Tasks can be marked as completed or pending using a checkbox/button.
* **Task Display:**
    * Displays task title, description, and completion status.
    * Shows the creation date and time for each task.
    * Visual distinction (e.g., strikethrough, different background) for completed tasks.
* **Task Filtering:**
    * Filters tasks by "All", "Completed", and "Pending" categories.
    * Displays the count of tasks for each filter category.
* **Data Persistence:**
    * All tasks and the logged-in username are saved in the browser's `localStorage` and persist across page refreshes.
* **Responsive Design:**
    * The application is designed to be responsive and works well on both mobile and desktop screens.

## Technical Stack

* **Frontend:** React.js (functional components with Hooks)
* **Styling:** Pure CSS
* **Routing:** React Router DOM
* **State Management:** React's built-in `useState`, `useEffect` (no external state management libraries used as per assignment requirements).
* **Data Persistence:** Browser's `localStorage`

## Project Structure

task-tracker/
├── public/
│   └── index.html
└── src/
├── components/
│   ├── Login.js          # User login form
│   ├── TaskForm.js       # Form for adding/editing tasks
│   ├── TaskItem.js       # Displays a single task
│   ├── TaskList.js       # Renders the list of tasks
│   └── TaskFilter.js     # Buttons for task filtering
├── utils/
│   └── localStorage.js   # Helper functions for localStorage interactions
├── styles/
│   └── App.css           # Global application styles
├── App.js                # Main application component, handles routing and global state
└── index.js              # Entry point for the React application


## Getting Started

Follow these steps to set up and run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vaibhav-bhosale1/task-tracker-assignment
    cd task-tracker-assignment
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## Live Demo

[Link to your deployed application will go here]
https://task-tracker-assignment-rho.vercel.app/

## Screenshots


![image](https://github.com/user-attachments/assets/fef4bdc8-35e6-43c6-8d95-0e98ae3e7794)
![image](https://github.com/user-attachments/assets/66f09b76-b6bc-418d-a909-e338c8557916)


