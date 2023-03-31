import { useState } from 'react'

const TodoCreateForm = ({ onCreate }) => {
  const [todo, setTodo] = useState('')

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(todo)
    setTodo('')
  }

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <input type='text' className='todo-form__input' value={todo} onChange={handleChange} />
        <button className='todo-form__button'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoCreateForm
