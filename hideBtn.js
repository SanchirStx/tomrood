import React, { useState } from 'react';

const HideBtn = ({ todos }) => {
  const [visibleTodos, setVisibleTodos] = useState(todos);

  const toggleVisibility = (id) => {
    setVisibleTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isVisible: !todo.isVisible } : todo
      )
    );
  };

  const toggleAllVisibility = () => {
    setVisibleTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, isVisible: !areAllVisible }))
    );
  };

  // Check if todos is not an array or is an empty array
  if (!Array.isArray(todos) || todos.length === 0) {
    return <div>No todos found.</div>;
  }

  const areAllVisible = visibleTodos.every((todo) => todo.isVisible);

  return (
    <div>
      <button onClick={toggleAllVisibility}>
        {areAllVisible ? 'Hide All' : 'Show All'}
      </button>
      {visibleTodos.map((todo) => (
        <div key={todo.id}>
          {todo.isVisible ? (
            <div>
              <span>{todo.text}</span>
              <button onClick={() => toggleVisibility(todo.id)}>Hide</button>
            </div>
          ) : (
            <button onClick={() => toggleVisibility(todo.id)}>Show</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default HideBtn;