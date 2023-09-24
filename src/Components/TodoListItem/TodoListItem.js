import './TodoListItem.css';

const TodoListItem = ({todo}) => {
    return(
        <li style={{listStyle: 'none', textTransform: 'uppercase'}}>
            {todo.content}
        </li>
    )
}

export default TodoListItem;