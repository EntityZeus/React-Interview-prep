import './react-useReducer.css';

import { useReducer } from 'react';

const reducer = (state, action) => {

}

const todoMiniApp = () => {
    const [todoItems, dispatch] = useReducer([], reducer);

    return (
        <div className="todo-mini-app-container">
            <h3>Todo Mini App using useReducer hook</h3>
        </div>
    )
}

export default todoMiniApp;