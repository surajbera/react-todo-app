/* libraries and functions */
import { useState, useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

/* components */
import { TodoEdit } from './TodoEdit'

/* icons */
import { DeleteIcon } from '../assets/icons'
import { EditIcon } from '../assets/icons'

export const TodoCard = ({ todo, bgImageIndex }) => {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteTodoById } = useContext(TodosContext)

  const handleDeleteClick = () => {
    deleteTodoById(todo.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const cardInnerClass = showEdit ? 'todo-card__inner todo-card__inner--edit' : 'todo-card__inner'
  const backgroundImage = {
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/300/300?random=${bgImageIndex}) no-repeat center center/cover`,
  }

  return (
    <li className='todo-card border'>
      <div className='todo-card__bg' style={backgroundImage}></div>

      <div className={cardInnerClass}>
        {!showEdit && (
          <div className='todo-card__actions d-flex'>
            <button className='todo-edit-btn d-flex' onClick={handleEditClick}>
              <EditIcon />
            </button>
            <button className='todo-delete-btn d-flex' onClick={handleDeleteClick}>
              <DeleteIcon />
            </button>
          </div>
        )}

        {!showEdit && <p className='todo-card__title'>{todo.title}</p>}
        {showEdit && <TodoEdit todo={todo} setShowEdit={setShowEdit} />}
      </div>
    </li>
  )
}
