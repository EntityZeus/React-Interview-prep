import {TodoAppContext} from '../../context/todoContext';
import { useContext } from 'react';
import UserListContext from './UserListContext';

const TodoAppWithContext = () => {
    const [tasks, setTasks] = useContext(TodoAppContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const taskObj = {
            name : formData.get('userName'),
            email: formData.get('email'),
            password: formData.get('userPassword')
        }
        setTasks(taskObj);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="text" name="userName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input name="userPassword" type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <UserListContext />
        </>
    )
}

export default TodoAppWithContext;