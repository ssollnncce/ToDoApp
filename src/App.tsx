import React from 'react';
import TodoInput from './components/TodoInput';
import TodoStats from './components/TodoStats';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>📝 ToDo Приложение</h1>
          <p>Управляйте своими задачами эффективно</p>
        </header>
        
        <main className="app-main">
          <TodoInput />
          <TodoStats />
          
          <div className="todo-sections">
            <TodoList filter="all" title="Все задачи" />
            <TodoList filter="active" title="Активные задачи" />
            <TodoList filter="completed" title="Выполненные задачи" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
