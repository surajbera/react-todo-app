/* libraies and functions */
import { useState } from 'react'

/* components */
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

/* utils */
import { getUniqueId } from './utils'

/* styles */
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (todo) => {
    const updatedTodos = [
      ...todos,
      {
        id: getUniqueId(),
        title: todo,
      },
    ]
    setTodos(updatedTodos)
  }

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todos) => {
      return todos.id !== id
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='App'>
      <h1 className='app-heading'>TODO APP</h1>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} />
    </div>
  )
}

export default App
