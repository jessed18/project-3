import React, { useState } from 'react';
import './Todos.css';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="todos-page">
      <div className="todos-container">
        <h1>tasks</h1>
        
        <div className="add-section">
          <form onSubmit={addTodo}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What do you need to do?"
              className="todo-input"
            />
            <button type="submit" className="add-btn">Add</button>
          </form>
        </div>

        <div className="filters">
          <button 
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All ({todos.length})
          </button>
          <button 
            className={filter === 'incomplete' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('incomplete')}
          >
            Active ({todos.filter(t => !t.completed).length})
          </button>
          <button 
            className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('completed')}
          >
            Done ({todos.filter(t => t.completed).length})
          </button>
        </div>

        <div className="todos-list">
          {filteredTodos.length === 0 ? (
            <p className="empty">no tasks here!</p>
          ) : (
            filteredTodos.map(todo => (
              <div key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-left">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.text}</span>
                </div>
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Todos;