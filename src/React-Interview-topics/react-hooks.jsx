import { useState } from 'react';

const ReactHooksComponent = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h3>React Hooks</h3>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>Toggle</button>
            {show && <p>This is a paragraph that can be toggled.</p>}
        </>    
    )
}

export default ReactHooksComponent;