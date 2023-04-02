/* icons */
import { DeleteIcon } from '../assets/icons'

const TodoCard = ({ todo, onDelete }) => {
  console.log(todo)

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

/* COMMENT: 
    - Remove border class from the delete btn

    - Resources for getting svg icons
      - React Icons (https://react-icons.github.io/react-icons/) - React Icons is a popular library of icons that are specifically designed for use in React applications. The library includes icons from popular icon libraries like Font Awesome, Material Icons, and Ionicons, as well as custom icons designed specifically for React.
      - Remix Icon (https://remixicon.com/) - Remix Icon is a library of open source icons that are designed specifically for modern web and app development. The icons are available in SVG format and can be easily integrated into React apps using the react-remixicon package.
      - Heroicons (https://heroicons.com/) - Heroicons is a library of open source icons that are designed specifically for use in web and app development. The icons are available in SVG format and can be easily integrated into React apps using the react-heroicons package.
      - Material Design Icons (https://materialdesignicons.com/) - Material Design Icons is a library of icons designed by Google that are available in SVG format. The library includes icons for a variety of categories, including action, communication, and content, and can be easily integrated into React apps using the @mdi/react package.

    - Since this is a very small project, I will use the Remix Icon library for the icons.
*/
