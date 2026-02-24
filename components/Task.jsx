import React from 'react';

export default function Task({ task }) {
  return (
    <div data-testid="task">
      <div>{task.title}</div>
      <div>Priority: {task.priority}</div>
    </div>
  );
}
