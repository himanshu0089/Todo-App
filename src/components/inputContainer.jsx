import React from 'react'

function inputContainer({inputVal, writeTodo, addTodo}) {
  return (
    <div className="input-container">
        <input type="text" value={inputVal} onChange={writeTodo} required></input>
        <button onClick={addTodo}>+</button> 
      </div>
  )
}

export default inputContainer