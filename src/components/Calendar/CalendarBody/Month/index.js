import React from 'react';
import Week from '../Week';
import '../../style.scss';

//TODO getWeekOfMonth


const Month = (props) => {
const {month}= props;  
console.log(month);  
    
return (
        <tbody >
            <Week year ='2022' week ='1' />
            <Week year ='2022' week ='2' />
            <Week year ='2022' week ='3' />
            <Week year ='2022' week ='4' />
            <Week year ='2022' week ='5' />
        </tbody>
    );
}

export default Month;
