import React from 'react';
import { useTodoContext } from '../hooks/useTodoContext';
import TodoItem from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  filter?: 'all' | 'active' | 'completed';
  title: string;
}

const TodoList: React.FC<TodoListProps> = ({ filter = 'all', title }) => {
  const { todos } = useTodoContext();

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="todo-list-container">
        <h3 className="todo-list-title">{title}</h3>
        <div className="empty-state">
          {filter === 'all' && 'Нет задач'}
          {filter === 'active' && 'Нет активных задач'}
          {filter === 'completed' && 'Нет выполненных задач'}
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      <h3 className="todo-list-title">{title}</h3>
      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
