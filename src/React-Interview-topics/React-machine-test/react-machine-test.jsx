import {useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ReactMachineTest = () => {

    const [currentIndex, setCurrentIndex] = useState(-1);
    const navigate = useNavigate();

    const handleRouteChange = (index, route) => {
        setCurrentIndex(index);
        navigate(route);
    }

    return (
        <div className="react-machine-test-container">
            <h3>React Machine Test Topics</h3>
            <ul className="list-group" style={{ width: '50%' }}>
                <li className="list-group-item" style={{ cursor: 'pointer'}} 
                onClick={() => handleRouteChange(0, './login-test')}>Login Form</li>
                <li className="list-group-item" style={{ cursor: 'pointer'}} 
                onClick={() => handleRouteChange(1, './autocomplete')}>Autocomplete</li>
                <li className="list-group-item" style={{ cursor: 'pointer'}} 
                onClick={() => handleRouteChange(2, './infinite-scroll')}>Infinite Scroll</li>
                <li className="list-group-item" style={{ cursor: 'pointer'}}
                onClick={() => handleRouteChange(3, './progress-bar')}>Progress bar</li>
                <li className="list-group-item" style={{ cursor: 'pointer'}}>Accordion</li>
            </ul>
            <Outlet />
        </div>
    )
}

export default ReactMachineTest;