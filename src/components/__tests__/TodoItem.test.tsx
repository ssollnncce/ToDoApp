import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItem from '../TodoItem';
import { TodoProvider } from '../../hooks/useTodoContext';
import { Todo } from '../../types/todo';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <TodoProvider>
      {component}
    </TodoProvider>
  );
};

const mockTodo: Todo = {
  id: '1',
  text: 'Test task',
  completed: false,
  createdAt: new Date('2023-01-01')
};

const mockCompletedTodo: Todo = {
  id: '2',
  text: 'Completed task',
  completed: true,
  createdAt: new Date('2023-01-01')
};

describe('TodoItem', () => {
  test('renders todo text and checkbox', () => {
    renderWithProvider(<TodoItem todo={mockTodo} />);
    
    expect(screen.getByText('Test task')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('renders completed todo with checked checkbox', () => {
    renderWithProvider(<TodoItem todo={mockCompletedTodo} />);
    
    expect(screen.getByText('Completed task')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('renders creation date', () => {
    renderWithProvider(<TodoItem todo={mockTodo} />);
    
    expect(screen.getByText('01.01.2023')).toBeInTheDocument();
  });

  test('renders delete button', () => {
    renderWithProvider(<TodoItem todo={mockTodo} />);
    
    expect(screen.getByRole('button', { name: 'Удалить задачу' })).toBeInTheDocument();
  });

  test('applies completed class when todo is completed', () => {
    renderWithProvider(<TodoItem todo={mockCompletedTodo} />);
    
    const todoItem = screen.getByText('Completed task').closest('.todo-item');
    expect(todoItem).toHaveClass('completed');
  });

  test('does not apply completed class when todo is not completed', () => {
    renderWithProvider(<TodoItem todo={mockTodo} />);
    
    const todoItem = screen.getByText('Test task').closest('.todo-item');
    expect(todoItem).not.toHaveClass('completed');
  });
});
