import React from 'react';

const FlexContainer = (props) => {
    const {children,fd,jc,ai} = props;
    const styles= {
        display:'flex',
        border: '1px solid red', 
        flexDirection: fd,
        justifyContent: jc,
        alignItem: ai
    }
    return (
        <div style={styles}>
            {children}
        </div>
    );
}

export default FlexContainer;
