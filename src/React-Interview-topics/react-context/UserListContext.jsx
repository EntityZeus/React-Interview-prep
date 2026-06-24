import { useContext, useEffect } from "react";
import { TodoAppContext } from "../../context/todoContext";

const UserListContext = () => {
    const [tasks, setTasks] = useContext(TodoAppContext);
    
    useEffect(() => {
        console.log(tasks);
    }, [tasks])
    return (
        <ul className="list-group">
            {tasks.map(data => {
               return <li className="list-group-item">{data.name}   {data.email}</li>
            })}
        </ul>
    )
}

export default UserListContext;