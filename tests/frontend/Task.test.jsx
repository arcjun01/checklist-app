import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from '../../components/Task';

test('renders task component', () => {
  render(<Task task={{ title: 'Test task', priority: 2 }} />);
  expect(screen.getByTestId('task')).toHaveTextContent('Test task');
  expect(screen.getByText(/Priority:/)).toBeInTheDocument();
});
