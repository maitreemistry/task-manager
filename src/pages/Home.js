import React from 'react';

export default function Home({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Tasks: {total}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Pending Tasks: {total - completed}</p>
    </div>
  );
}
