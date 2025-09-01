import React from 'react';
import { useTodoContext } from '../hooks/useTodoContext';
import './TodoStats.css';

const TodoStats: React.FC = () => {
  const { remainingCount, completedCount, clearCompleted } = useTodoContext();

  return (
    <div className="todo-stats">
      <div className="stats-info">
        <div className="stat-item">
          <span className="stat-label">Осталось задач:</span>
          <span className="stat-value remaining">{remainingCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Выполнено:</span>
          <span className="stat-value completed">{completedCount}</span>
        </div>
      </div>
      {completedCount > 0 && (
        <button 
          onClick={clearCompleted}
          className="clear-completed-button"
        >
          Очистить выполненные
        </button>
      )}
    </div>
  );
};

export default TodoStats;
