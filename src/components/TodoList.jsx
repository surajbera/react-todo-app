import { TodoCard } from './TodoCard'

export const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <ul className='todo-list border'>
      {todos.map((todo, index) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          bgImageIndex={index}
        />
      ))}
    </ul>
  )
}
