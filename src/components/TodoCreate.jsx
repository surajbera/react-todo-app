import { useState } from 'react'

export const TodoCreate = ({ onCreate }) => {
  const [todo, setTodo] = useState('')

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (todo.trim() === '') {
      return
    }
    onCreate(todo)
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
