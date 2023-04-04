import { useState, useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

export const TodoEdit = ({ todo, setShowEdit }) => {
  const [title, setTitle] = useState(todo.title)
  const { editTodoById } = useContext(TodosContext)

  const handleChange = (evt) => {
    setTitle(evt.target.value)
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    editTodoById(todo.id, title)
    setShowEdit(false)
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
