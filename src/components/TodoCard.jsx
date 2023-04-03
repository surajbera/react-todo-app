/* libraries and functions */
import { useState } from 'react'

/* components */
import { TodoEdit } from './TodoEdit'

/* icons */
import { DeleteIcon } from '../assets/icons'
import { EditIcon } from '../assets/icons'

export const TodoCard = ({ todo, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteClick = () => {
    onDelete(todo.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const cardInnerClass = showEdit ? 'todo-card__inner todo-card__inner--edit' : 'todo-card__inner'

  return (
    <li className='todo-card border' key={todo.id}>
      <div className={cardInnerClass}>
        {!showEdit && (
          <div className='todo-card__actions d-flex'>
            <button className='todo-edit-btn border d-flex' onClick={handleEditClick}>
              <EditIcon />
            </button>
            <button className='todo-delete-btn border d-flex' onClick={handleDeleteClick}>
              <DeleteIcon />
            </button>
          </div>
        )}

        {!showEdit && <p className='todo-card__title'>{todo.title}</p>}
        {showEdit && <TodoEdit todo={todo} onEdit={onEdit} setShowEdit={setShowEdit} />}
      </div>
    </li>
  )
}
