import { createContext, useState } from 'react'
import axios from 'axios'

export const TodosContext = createContext()

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }

  const createTodo = async (todo) => {
    const response = await axios.post('http://localhost:3001/todos', {
      title: todo,
    })

    const updatedTodos = [...todos, response.data]
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
      title: newTitle,
    })

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...response.data,
        }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  const todoAPI = {
    todos,
    fetchTodos,
    createTodo,
    deleteTodoById,
    editTodoById,
  }

  return <TodosContext.Provider value={todoAPI}>{children}</TodosContext.Provider>
}
