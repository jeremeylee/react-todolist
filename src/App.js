import React, { useState, useEffect } from 'react';
import './App.css';
import todoServices from './services/todos'

function App() {
  const [todos, setTodos] = useState([])
  const [newItem, setNewItem] = useState('')
  const [edit, setEdit] = useState(false)
  const [newEdit, setNewEdit] = useState('')

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
      <li key={todo.id}>
        {todo.todo}
        <button onClick={() => deleteItem(todo.id)}>delete</button>
        <button onClick={() => handleEditMode(todo.id)}>edit</button>
      </li>
    )
  
  const deleteItem = id => {
    todoServices
      .deleteItem(id)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id))
      })
  }

  const conditionalForm = () => {
    if (edit === true) {
      return editMode()
    } else {
      return addMode()
    }
  }

  const addMode = () => 
    <form onSubmit={addItem}>
    Enter something todo:
    <input
      value={newItem}
      onChange={handleTodoChange}
    />
    <button type="submit">Add</button>
  </form>
  
  const editMode = () =>
    <form onSubmit={editItem}>
    Enter something todo:
    <input
      value={newItem}
      onChange={handleTodoChange}
    />
    <button type="submit">Edit</button>
  </form>

  const handleEditMode = id => {
    const todo = todos.find(x => x.id == id)
    setNewItem(todo.todo)
    setNewEdit(id)
    setEdit(true)
  }

  const editItem = event => {
    event.preventDefault()
    const item = todos.find(todo => todo.id === newEdit)
    const changedItem = {...item, todo: newItem}

    todoServices
      .update(newEdit, changedItem)
      .then(updatedItem => {
        setTodos(todos.map(todo => todo.id === newEdit ? updatedItem : todo))
        setNewItem('')
        setEdit(false)
      })
  }
  const addItem = event => {
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
      {conditionalForm()}
    </div>
  )
}

export default App;
