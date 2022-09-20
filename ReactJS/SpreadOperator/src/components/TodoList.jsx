import React from "react";

function TodoList(props) {
  return (
    <ul>
      {props.items.map((currentItem) => {
        return <li>{currentItem}</li>;
      })}
    </ul>
  );
}

export default TodoList;
