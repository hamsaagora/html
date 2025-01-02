import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (task) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
