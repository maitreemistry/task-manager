import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Header from './components/Header';

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import About from './pages/About';

const navStyle = {
  display: 'flex',
  gap: '20px',
  background: '#282c34',
  padding: '16px 32px',
  marginBottom: '30px',
  borderRadius: '8px',
  alignItems: 'center',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '18px',
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  background: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  padding: '32px',
};

export default function App() {
  // Tasks state shared across pages
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish React project', completed: false },
    { id: 2, title: 'Read a book', completed: true },
  ]);

  // Add new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle completed status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      {/* <Header /> */}
      <div style={containerStyle}>
        <nav style={navStyle}>
          <h1>NavBar</h1>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/tasks" style={navLinkStyle}>Tasks</Link>
          <Link to="/add" style={navLinkStyle}>Add Task</Link>
          <Link to="/about" style={navLinkStyle}>About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            }
          />
          <Route path="/add" element={<AddTask addTask={addTask} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

