import React from 'react'
import { TodoCard } from './TodoCard'

export const TodoList = ({ todos, onDelete }) => {
  const renderedTodos = todos.map((todo) => {
    return <TodoCard todo={todo} onDelete={onDelete} />
  })

  return <ul className='todo-list border'>{renderedTodos}</ul>
}
