import { render, screen } from "@testing-library/react";

import TaskName from '../../../../../components/atoms/taskName/TaskName';

test('renders TaskName component', () => {
  const task = { id: 1, name: 'Task 1', description: 'Description 1', date: '2024-01-09', isClosed: false };

  render(<TaskName task={task} />);

  expect(screen.getByTestId(`task-name-${task.id}`)).toBeInTheDocument();
});