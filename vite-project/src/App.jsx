import React, { useState } from "react";
import InputContainer from "./components/inputContainer";
import TodoContainer from "./components/TodoContainer";
import "./App.css";

function App() {
  const [inputVal, setinputVal] = useState("");
  const [todos, setTodos] = useState([]);
  function writeTodo(e) {
    setinputVal(e.target.value);
  }
  function addTodo() {
    if (inputVal != "") {
      // setTodos(inputVal)  // this will only get latest data, not previous data
      setTodos((previosTodos) => [...previosTodos, inputVal]);
      setinputVal(""); // it will make input field blank again
    }
  }

  function delTodo(todoindex) {
    setTodos((previosTodo) =>
      previosTodo.filter((previosTodo, previosTodosIndex) => {
        return previosTodosIndex != todoindex;
      })
    );
  }
  //console.log(todos)

  return (
    <main>
      <h1>To do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} delTodo={delTodo}/>
    </main>
  );
}

export default App;

