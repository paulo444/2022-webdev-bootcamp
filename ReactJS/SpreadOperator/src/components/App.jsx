import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");

  const [todoItems, setTodoItems] = useState([]);

  function addTodoItem(event) {
    setTodoItems((prevValue) => {
      return [...prevValue, todo];
    });
  }

  function onChangeTodoHandler(event) {
    setTodo(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={onChangeTodoHandler} value={todo} />
        <button onClick={addTodoItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <TodoList items={todoItems} />
      </div>
    </div>
  );
}

export default App;
