import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [newItem, setNewItem] = useState('')
  
  const todoList = () => 
    todos.map(todo =>
      <li>
        {todo.todo}
      </li>
    )
  

  const addItem = (event) => {
    event.preventDefault()

    const itemObject = {
      todo: newItem
    }

    setTodos(todos.concat(itemObject))

  }

  const handleTodoChange = (event) => {
    setNewItem(event.target.value)
  }

  return (
    <div >
      <h1>Todo List</h1>
      <ul>
        {todoList()}
      </ul>
      <form onSubmit={addItem}>
        Enter something todo:
        <input
          value={newItem}
          onChange={handleTodoChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
