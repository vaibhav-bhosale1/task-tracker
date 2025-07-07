// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';

import TaskDashboard from './components/TaskDashboard'; 
import './App.css'; // Your main styling file [cite: 66]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check localStorage for username on initial load
    const storedUsername = localStorage.getItem('username'); // Data persistence [cite: 29]
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Personal Task Tracker</h1>
          {isLoggedIn && (
            <div className="user-info">
              <span>Welcome, {username}!</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </header>

        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/tasks" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/tasks"
            element={isLoggedIn ? <TaskDashboard username={username} /> : <Navigate to="/" />}
          />
          {/* Add other routes here as you build more components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;