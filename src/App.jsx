/* libraies and functions */
import { useState, useEffect } from 'react'
import axios from 'axios'

/* components */
import { TodoCreate } from './components/TodoCreate'
import { TodoList } from './components/TodoList'

/* utils */
/* Not needed now since we are using JSON server */
// import { getUniqueId } from './utils'

/* styles */
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetchTodos() 
  }, [])

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }
  
  const createTodo = async (todo) => {
    const response = await axios.post('http://localhost:3001/todos', {
      title: todo
    })

    const updatedTodos = [
      ...todos,
      response.data
    ]
    setTodos(updatedTodos)
  }

  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)

    const updatedTodos = todos.filter((todos) => {
      return todos.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle
    })

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...response.data
        }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <div className='App'>
      <h1 className='app-heading'>TODO APP</h1>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  )
}

export default App
