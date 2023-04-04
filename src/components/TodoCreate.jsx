import { useState, useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

export const TodoCreate = () => {
  const [todo, setTodo] = useState('')
  const { createTodo } = useContext(TodosContext)

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (todo.trim() === '') {
      return
    }
    createTodo(todo)
    setTodo('')
  }

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <input type='text' className='todo-form__input' value={todo} onChange={handleChange} />
        <button className='todo-form__button border'>Add Todo</button>
      </form>
    </div>
  )
}
