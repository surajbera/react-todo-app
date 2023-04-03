import { useState } from 'react'

export const TodoEdit = ({ todo }) => {
  const [title, setTitle] = useState(todo.title)

  const handleChange = (evt) => {
    setTitle(evt.target.value)
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(title)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='edit-todo-input' className='edit-todo-label'>
          Edit Todo:
        </label>
        <input type='text' value={title} id='edit-todo-input' onChange={handleChange} />
      </form>
    </div>
  )
}
