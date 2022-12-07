import React from 'react';
import { format } from 'date-fns';

const Day = (props) =>{
    const theDay = format(props.day, 'd');
    console.log(theDay)
     return (
        <td>
            {format(props.day, 'd')}
        </td>
    );
}

export default Day;
