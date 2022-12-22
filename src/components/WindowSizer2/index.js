import React,{useState, useEffect} from 'react';
import useWindowSizer from '../../hooks/useWindowSizer';

const WindowSizer2 = () => {
    const sizes = useWindowSizer();
    
    return (
        <div>
            <p>Width: {sizes.x}</p>
            <p>Height: {sizes.y}</p>
            
        </div>
    );

}

export default WindowSizer2;
