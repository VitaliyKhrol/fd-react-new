import React, { Component } from 'react';
import './style.css';

function Lamp (props) {
    const toogle =()=>{
        props.callbackParent();
    }

    const cn = props.toggleState ? 'lamp-on' : 'lamp-off'
        
    return (
            <>
                <div className={cn}>
                </div>
                <button onClick={toogle}>Toggle</button>
            </>
        );
    
}

export default Lamp;
