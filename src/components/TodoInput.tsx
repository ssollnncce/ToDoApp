import React, { useState, KeyboardEvent } from 'react';
import { useTodoContext } from '../hooks/useTodoContext';
import './TodoInput.css';

const TodoInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Добавить новую задачу..."
        className="todo-input"
      />
      <button 
        onClick={handleSubmit}
        disabled={!inputValue.trim()}
        className="add-button"
      >
        Добавить
      </button>
    </div>
  );
};

export default TodoInput;
