import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';
import { TodoProvider } from '../../hooks/useTodoContext';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <TodoProvider>
      {component}
    </TodoProvider>
  );
};

describe('TodoList', () => {
  test('renders all todos list with title', () => {
    renderWithProvider(<TodoList filter="all" title="Все задачи" />);
    
    expect(screen.getByText('Все задачи')).toBeInTheDocument();
  });

  test('renders active todos list with title', () => {
    renderWithProvider(<TodoList filter="active" title="Активные задачи" />);
    
    expect(screen.getByText('Активные задачи')).toBeInTheDocument();
  });

  test('renders completed todos list with title', () => {
    renderWithProvider(<TodoList filter="completed" title="Выполненные задачи" />);
    
    expect(screen.getByText('Выполненные задачи')).toBeInTheDocument();
  });

  test('shows empty state when no todos', () => {
    renderWithProvider(<TodoList filter="all" title="Все задачи" />);
    
    expect(screen.getByText('Нет задач')).toBeInTheDocument();
  });

  test('shows empty state for active todos when no active todos', () => {
    renderWithProvider(<TodoList filter="active" title="Активные задачи" />);
    
    expect(screen.getByText('Нет активных задач')).toBeInTheDocument();
  });

  test('shows empty state for completed todos when no completed todos', () => {
    renderWithProvider(<TodoList filter="completed" title="Выполненные задачи" />);
    
    expect(screen.getByText('Нет выполненных задач')).toBeInTheDocument();
  });
});
