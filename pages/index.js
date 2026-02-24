import React, { useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(0);

  async function addTask(e) {
    e.preventDefault();
    await fetch('http://localhost:4000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, priority: Number(priority) }),
    });
    setTitle('');
    setPriority(0);
  }

  return (
    <main>
      <h1>Checklist</h1>
      <form onSubmit={addTask}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
        <input type="number" value={priority} onChange={(e) => setPriority(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </main>
  );
}
