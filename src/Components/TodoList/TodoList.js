import {useState, useEffect} from 'react';
import './TodoList.css';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [showTodos, setShowTodos] = useState(true);

    useEffect(() => {
       
        const StartTodoList = [{
          id: '1',
          content: 'hello world'   
        }, {
            id: '2',
            content: 'JS Training'
        },{
            id: '3',
            content: 'React Training'
        }];

        setTodos(StartTodoList);
        localStorage.setItem('todos', JSON.stringify(todos));
        
        return saveTodos;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveTodos = () => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }

    useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos));   
    }, [todos]);

    const toggleData = () => {
        setShowTodos(!showTodos)
    };

    return (
        <div className='AddHeader'>
        <button onClick={toggleData}>{showTodos ? 'Hide Todos' : 'Show Todos'}</button>
            {showTodos && (
                <ul>
                {todos.map((todo,index) => (
                  <TodoListItem key={index} todo = {todo}/>
            ))}
                </ul>
            )}
        </div>
    )



}

export default TodoList;