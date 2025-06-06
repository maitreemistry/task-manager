import React from 'react';

export default function Tasks({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) return <p>No tasks yet. Please add some.</p>;

  return (
    <div>
      <h1>Tasks List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: '10px',
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              style={{ marginRight: '10px' }}
            />
            {task.title}
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                marginLeft: '15px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
