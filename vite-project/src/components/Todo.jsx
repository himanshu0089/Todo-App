import React from "react";

function Todo({ todo, index, delTodo }) {
  return (
    <form className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox"/>
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </form>
  );
}

export default Todo;
