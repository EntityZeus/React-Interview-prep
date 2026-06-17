import './todo-list-component.css';
import { useEffect } from 'react';

const TodoListComponent = ({ todoItems, dispatch}) => {

    useEffect(() => {
        console.log("todoItems", todoItems);
    }, [todoItems]);

    const handleDeleteTodo = (index) => {
        dispatch({ type: 'REMOVE_TODO', payload: { index }})
    }

    return (
        <div className='list-container'>
            
            {todoItems.length !== 0 ?
              todoItems.map((todoItem, index) => {
                return (
                    <div className='todo-item' key={index}>
                        <span>{todoItem.name} - {todoItem.description}</span>
                        <button className='btn btn-danger' onClick={() => handleDeleteTodo(index)}>Delete Todo</button>
                    </div>
                )
            }) : <p>No todo items added yet</p>}
        </div>
    )
}

export default TodoListComponent;