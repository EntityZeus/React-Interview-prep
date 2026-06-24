import { createContext, useState } from 'react';

const TodoAppContext = createContext([]);

const TodoAppContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    const setTasksState = (value) => {
        setTasks([...tasks, value]);
    }

    return (
        <TodoAppContext value={[tasks, setTasksState]}>
            {children}
        </TodoAppContext>
    )
}

export {TodoAppContextProvider, TodoAppContext};