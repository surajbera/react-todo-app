import './App.css'
import { useState } from 'react'
import TodoCreateForm from './components/TodoCreateForm'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (todo) => {
    console.log('Need to add todo: ', todo)
  }

  return (
    <div className='App'>
      <h1 className='app-heading'>TODO APP</h1>
      <TodoCreateForm onCreate={createTodo} />
    </div>
  )
}

export default App
