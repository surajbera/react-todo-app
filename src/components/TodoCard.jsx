import React from 'react'

const TodoCard = ({ todo }) => {
  return (
    <li className='todo-card border' key={todo.id}>
      <div className='todo-card__inner'>
        <p className='todo-card__title'>{todo.title}</p>
      </div>
    </li>
  )
}

export default TodoCard
