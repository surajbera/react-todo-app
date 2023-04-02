/* icons */
import { DeleteIcon } from '../assets/icons'
import { EditIcon } from '../assets/icons'

const TodoCard = ({ todo, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(todo.id)
  }
  const handleEditClick = () => {
    console.log('Edit')
  }

  return (
    <li className='todo-card border' key={todo.id}>
      <div className='todo-card__inner'>
        <p className='todo-card__title'>{todo.title}</p>
        <div className='todo-card__actions d-flex'>
          <button className='todo-delete-btn border d-flex' onClick={handleDeleteClick}>
            <DeleteIcon />
          </button>
          <button className='todo-edit-btn border d-flex' onClick={handleEditClick}>
            <EditIcon />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoCard
