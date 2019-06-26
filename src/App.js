import React, { useState, useEffect } from 'react';
import './App.css';
import todoServices from './services/todos'

function App() {
  const [todos, setTodos] = useState([])
  const [newItem, setNewItem] = useState('')
  
  useEffect(() => {
    console.log('effect')
    todoServices
      .getAll()
      .then(initialTodos => {
        console.log('promise fulfilled')
        setTodos(initialTodos)
      })
  }, [])

  console.log(`rendered ${todos.length} items`)

  const todoList = () => 
    todos.map(todo =>
      <li>
        {todo.todo}
        <button onClick={() => deleteItem(todo.id)}>delete</button>
        <button onClick={() => editItem(todo.id)}>edit</button>
      </li>
    )
  
  const deleteItem = id => {
    todoServices
      .deleteItem(id)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id))
      })
  }
  
  const editItem = id => {
    const todo = todos.find(x => x.id == id)
    setNewItem(todo.todo)
  }
  const addItem = (event) => {
    event.preventDefault()

    const itemObject = {
      todo: newItem
    }
    todoServices
      .create(itemObject)
      .then(returnedTodos => {
        setTodos(todos.concat(returnedTodos))
        setNewItem('')
      }) 
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
  )
}

export default App;
