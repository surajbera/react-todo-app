/* icons */
import { DeleteIcon } from '../assets/icons'

const TodoCard = ({ todo, onDelete }) => {
  const handleClick = () => {
    onDelete(todo.id)
  }

  return (
    <li className='todo-card border' key={todo.id}>
      <div className='todo-card__inner'>
        <p className='todo-card__title'>{todo.title}</p>
        <div className='todo-card__actions'>
          <button className='todo-delete-btn border' onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoCard
