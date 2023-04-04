import { useContext } from 'react'
import { TodoCard } from './TodoCard'
import { TodosContext } from '../context/TodosContext'

export const TodoList = () => {
  const { todos } = useContext(TodosContext)

  return (
    <ul className='todo-list border'>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} bgImageIndex={todo.id} />
      ))}
    </ul>
  )
}
