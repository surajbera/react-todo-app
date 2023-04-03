/* libraries and functions */
import { useState } from 'react'

/* components */
import { TodoEdit } from './TodoEdit'

/* icons */
import { DeleteIcon } from '../assets/icons'
import { EditIcon } from '../assets/icons'

export const TodoCard = ({ todo, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteClick = () => {
    onDelete(todo.id)
  }

  const handleEditClick = () => {
    setShowEdit(!setShowEdit)
  }

  return (
    <li className='todo-card border' key={todo.id}>
      <div className='todo-card__inner'>
        <div className='todo-card__actions d-flex'>
          <button className='todo-edit-btn border d-flex' onClick={handleEditClick}>
            <EditIcon />
          </button>
          <button className='todo-delete-btn border d-flex' onClick={handleDeleteClick}>
            <DeleteIcon />
          </button>
        </div>

        <p className='todo-card__title'>{todo.title}</p>
      </div>
    </li>
  )
}
