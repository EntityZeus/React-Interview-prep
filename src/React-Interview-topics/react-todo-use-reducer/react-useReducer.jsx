import './react-useReducer.css';

import { useReducer } from 'react';
import TodoListComponent from './todo-list-component/todo-list-component';

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TODO':
           return [...state, {name: action.payload.name, description: action.payload.description}];
        case 'REMOVE_TODO':
            return state.filter((todo, index) => index !== action.payload.index);
        default:
            return state;
    }
}

const todoMiniApp = () => {
    const [todoItems, dispatch] = useReducer(reducer, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log("formData", formData.get('task-name'), formData.get('task-description'));
        const taskName = formData.get('task-name');
        const taskDescription = formData.get('task-description');
        dispatch({ type: 'ADD_TODO', payload: { name: taskName, description: taskDescription } });
    }

    return (
        <div className="todo-mini-app-container">
            <h3>Todo Mini App using useReducer hook</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Task Name</label>
                    <input type="text" className="form-control" name="task-name" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Enter the task name</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Task Description </label>
                    <input type="text" className="form-control" name="task-description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <TodoListComponent todoItems={todoItems} dispatch={dispatch} />
        </div>
    )
}

export default todoMiniApp;