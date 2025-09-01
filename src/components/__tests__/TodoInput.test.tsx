import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoInput from '../TodoInput';
import { TodoProvider } from '../../hooks/useTodoContext';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <TodoProvider>
      {component}
    </TodoProvider>
  );
};

describe('TodoInput', () => {
  test('renders input field and add button', () => {
    renderWithProvider(<TodoInput />);
    
    expect(screen.getByPlaceholderText('Добавить новую задачу...')).toBeInTheDocument();
    expect(screen.getByText('Добавить')).toBeInTheDocument();
  });

  test('add button is disabled when input is empty', () => {
    renderWithProvider(<TodoInput />);
    
    const addButton = screen.getByText('Добавить');
    expect(addButton).toBeDisabled();
  });

  test('add button is enabled when input has text', () => {
    renderWithProvider(<TodoInput />);
    
    const input = screen.getByPlaceholderText('Добавить новую задачу...');
    const addButton = screen.getByText('Добавить');
    
    fireEvent.change(input, { target: { value: 'Test task' } });
    expect(addButton).not.toBeDisabled();
  });

  test('adds todo when button is clicked', async () => {
    renderWithProvider(<TodoInput />);
    
    const input = screen.getByPlaceholderText('Добавить новую задачу...');
    const addButton = screen.getByText('Добавить');
    
    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(addButton);
    
    // Check that input is cleared after adding todo
    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  });

  test('does not add empty todo', () => {
    renderWithProvider(<TodoInput />);
    
    const input = screen.getByPlaceholderText('Добавить новую задачу...');
    const addButton = screen.getByText('Добавить');
    
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    expect(input).toHaveValue('   ');
  });
});
