import { fireEvent, render, screen } from "@testing-library/react";
import TaskCard from '../../../../../components/atoms/taskCard/TaskCard'; // Importe o componente TaskCard diretamente

test('renders TaskCard component with data-testid', () => {
  const task = { id: 1, name: 'Task 1', description: 'Description 1', date: '2024-01-09' };

  render(<TaskCard task={task} onClick={() => {}} />);

  expect(screen.getByTestId(`task-${task.id}`)).toBeInTheDocument();
});

// test('delete a task when delete button is clicked', () => {
//   const task = { id: 1, name: 'Task 1', description: 'Description 1', date: '2024-01-09' };

//   render(<TaskCard task={task} onClick={() => {}} />);

//   // Simulando o clique no botão de exclusão da tarefa
//   fireEvent.click(screen.getByTestId(`delete-button-${task.id}`));

//   // Verificando se a tarefa foi removida
//   expect(screen.queryByText('Task 1')).toBeNull();
// });