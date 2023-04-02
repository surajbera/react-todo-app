import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({ todos }) => {
  const renderedTodos = todos.map((todo) => {
    return <TodoCard todo={todo} />
  })

  return <ul className='todo-list border'>{renderedTodos}</ul>
}

export default TodoList
