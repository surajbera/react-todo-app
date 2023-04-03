import { TodoCard } from './TodoCard'

export const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className='todo-list border'>
      {todos.map((todo) => (
        <TodoCard todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  )
}
