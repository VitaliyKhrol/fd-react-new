import React, {useEffect, useState} from 'react';

const MouseTracker = () => {
  
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('ефект навісили')
        window.addEventListener('click', handleClick);
        return () => {
            console.log('ефект почистили');
            window.removeEventListener('click', handleClick);
        }
    },[count]);

    
    const handleClick = () => {
        setCount(count+1)
    }

    console.log('render');
    return (
          <div>
          
           <p>Counter: {count}</p>
           
        </div>
    );
}
export default MouseTracker;
