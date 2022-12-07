
import React,{useState, useEffect} from 'react';
import {format,addSeconds} from 'date-fns';


function Timer2 (props) {
    const [time,setTime] =useState(new Date(0,0,0,0,0,0));
    const [isRunning, setRunning] = useState(false);
    
    useEffect(() => {
        let intervalId = null;
        if(isRunning) {
            intervalId = setTimeout(()=> {
                setTime(addSeconds(time, 1))
            }, 1000);
        }
        return () => {
            clearTimeout(intervalId)
        }
    });
    
    const reset = () => {
        setTime(new Date(0,0,0,0,0,0))
    }
    
    const switchRunning = () => {
        setRunning(!isRunning);
    }

      
        return (
            <div>
                <h1>{format(time, 'HH:mm:ss')}</h1>
                <button onClick={switchRunning} className={buttonClassname}>{buttonText}</button>
               <button onClick={reset}>Clear</button>
            </div>
            
        );
    
}

export default Timer2;

