import React from 'react';
import { Todo } from '../types/todo';
import { useTodoContext } from '../hooks/useTodoContext';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext();

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
        <span className="todo-date">
          {todo.createdAt.toLocaleDateString('ru-RU')}
        </span>
      </div>
      <button 
        onClick={handleDelete}
        className="delete-button"
        aria-label="Удалить задачу"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;
