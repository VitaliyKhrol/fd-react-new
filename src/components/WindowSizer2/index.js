import React,{useState, useEffect} from 'react';

const WindowSizer2 = () => {
    const [sizes, setSizes] = useState({
        x:window.innerHeight,
        y:window.innerWidth
    })
   
    useEffect(()=>{
        console.log('2')
        window.addEventListener('resize',resizeHandler);
        return ()=> {
        window.removeEventListener('resize',resizeHandler);
        }
    },[]);
 
    const resizeHandler = () =>{
        setSizes({
            x:window.innerWidth,
            y:window.innerHeight
    })
}
    
    return (
        <div>
            <p>Width: {sizes.x}</p>
            <p>Height: {sizes.y}</p>
            
        </div>
    );

}

export default WindowSizer2;
