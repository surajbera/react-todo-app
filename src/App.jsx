/* libraies and functions */
import { useEffect, useContext } from 'react'
import { TodosContext } from './context/TodosContext'

/* components */
import { TodoCreate } from './components/TodoCreate'
import { TodoList } from './components/TodoList'

/* utils */
/* Not needed now because we are using JSON server */
// import { getUniqueId } from './utils'

/* styles */
import './App.css'

function App() {
  const { fetchTodos } = useContext(TodosContext)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className='App'>
      <h1 className='app-heading'>TODO APP</h1>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
