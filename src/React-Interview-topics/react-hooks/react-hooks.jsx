import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReactHooksComponent = () => {
    const navigate = useNavigate();

    const [counter, setCounter] = useState(0);
    const [useEffectExampleData, setUseEffectExampleData] = useState(0);

    // useEffect with dependency array, here it only executes when the value in dependency array changes
    useEffect(() => {
        setUseEffectExampleData(counter);
    }, [counter]);

    //This useEffect only executes onces in the component lifecycle when we pass empty dependancy array.

    useEffect(() => {
        console.log("useEffect hook example with empty dependency array executed");
    }, [])

    const handleUseReducerClick = () => {
        navigate('/use-reducer');
    }
    return (
        <div className="container">
            <h3>React Hooks</h3>
            <p>React hooks are nothing but a javascript/typescript function that use 
            react features. React hooks are used to manage state and side effects in functional components.
            we can use react custom hooks to reuse the logic across the components.
            </p>

            <p className="h5">Few Important Builtin React Hooks </p>
            <ul className='list-group' style={{ width: '50%' }}>
                <li className='list-group-item'>useState</li>
                <li className='list-group-item'>useEffect</li>
                <li className='list-group-item'>useContext</li>
                <li className='list-group-item' style = {{cursor: "pointer"}} onClick={handleUseReducerClick}>useReducer</li>
                <li className='list-group-item'>useCallback</li>
                <li className='list-group-item'>useMemo</li>
            </ul>

            <p>Example of these hooks</p>
            <h5>useState hook</h5>
            <p>useState hook is used in react to manage state in a functional component, where if the 
                state value changes then the component will re-render. 
                useState hook returns an array with two values, one is the state value and another is 
                the setter function to update the state value.
            </p>
            {/* useState Example Code */}
            <button className="btn btn-primary" onClick={()=>{setCounter(counter+1)}}>useState Example Button - {counter}</button>

            <p>Click the above button to update the counter state using useState hook.</p>
            <br/>
            <h5>useEffect hook</h5>
            <p>
                This is another important hook in react which is used to manage the side effects of a component,
                useEffect hook can be used fetch api data, to set up a subscription, to manually change the DOM in react components.
                useEffect hook takes two arguments, first one is a callback function and second one is a dependency array.
                The callback function will be executed after the component is rendered and the dependency array is used to specify when the callback function should be executed.
            </p>
            <p>Example of useEffect hook</p>
            <p> Number of times useEffect hook executed because of counter changes: {useEffectExampleData}</p>
            <p>In the above example, the useEffect hook will be executed whenever the counter state value changes.</p>
            
        </div>    
    )
}

export default ReactHooksComponent;