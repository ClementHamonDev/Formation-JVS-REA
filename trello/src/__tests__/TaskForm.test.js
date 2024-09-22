import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';

test('adds a new task when form is submitted', () => {
  const onAddTask = jest.fn();
  render(<TaskForm onAddTask={onAddTask} />);

  // Check that the input and button are present
  const titleInput = screen.getByPlaceholderText('Titre');
  const descriptionInput = screen.getByPlaceholderText('Description');
  const addButton = screen.getByText('Nouvelle tâche');

  // Add a new task
  fireEvent.change(titleInput, { target: { value: 'Nouvelle tâche' } });
  fireEvent.change(descriptionInput, { target: { value: 'Description pour la nouvelle tâche' } });
  fireEvent.click(addButton);

  // Check if onAddTask was called with the correct arguments
  expect(onAddTask).toHaveBeenCalledWith({
    title: 'Nouvelle tâche',
    description: 'Description pour la nouvelle tâche',
  });

  // Check if inputs are cleared after adding the task
  expect(titleInput.value).toBe('');
  expect(descriptionInput.value).toBe('');
});