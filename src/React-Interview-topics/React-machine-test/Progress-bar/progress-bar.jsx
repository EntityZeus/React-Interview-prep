import './progress-bar.css';
import { useState, useRef } from 'react';

const ProgresBar = () => {
    const [progressCount, setProgressCount] = useState(0);
    const timeoutRef = useRef(null);

    const updateCount = () => {
        if(timeoutRef.current) {
            clearInterval(timeoutRef.current);
        }

        timeoutRef.current = setInterval(() => {
            setProgressCount(prev => {
                if(prev >= 100) {
                    clearInterval(timeoutRef.current);
                    timeoutRef.current = null;
                    return 100;
                }
                return prev + 10;
            });
        }, 500);
    }

    return (
        <div className='progress-bar-container'>
          <button className='btn btn-primary' onClick={updateCount}>Update Progressbar</button>
          <div className="progress-bar-slider">
            <div className='progress-bar-color-slider' style={{width: `${progressCount}%`}}></div>
          </div>
        </div>
    )
}

export default ProgresBar;