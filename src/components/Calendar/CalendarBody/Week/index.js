import { addDays, parse } from 'date-fns';
import React from 'react';
import Day from '../Day';

const Week = (props) => {
    const{year,week} = props;
    const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date())
   
    const arr = new Array(7)
    .fill(null)
    .map((el,index)=> <Day day={addDays(startOfWeek,index)}/>)
    console.log (arr)
    return (
        <tr>
           {arr} 
        </tr>
    );
}

export default Week;
