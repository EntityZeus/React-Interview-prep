import {Link} from 'react-router-dom';
import './react-interview-topics.css';

const reactInterViewTopics = () =>{
    return (
        <>
            <h3>React Js Important Topics</h3>
            <ul className="list-group">
                <li className="list-group-item router-item">
                    <Link to="/hooks" className="router-link">React Hooks</Link>
                </li>
                <li className="list-group-item">Higher Order Components</li>
                <li className="list-group-item">Lifecyle Methods</li>
                <li className="list-group-item">State Management</li>
                <li className="list-group-item">Redux and zustand</li>
                <li className="list-group-item">Lazy and suspense</li>
                <li className="list-group-item">Virtual DOM</li>
                <li className="list-group-item">SSR and CSR</li>
                <li className="list-group-item">Role-base Routing</li>
                <li className="list-group-item">Async Task</li>
                <li className="list-group-item">Testing</li>
                <li className="list-group-item">Promises</li>
                <li className="list-group-item">Performance Improvement</li>
                <li className="list-group-item">Accessibility</li>
            </ul>
        </>
    )
}

export default reactInterViewTopics;