import React, { useState, useCallback } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');



  const addTodo = useCallback(() => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo('');
      console.log("In AddTodo");
    }
  }, [newTodo]); // Dependency Array

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default Todo;
