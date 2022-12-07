import React from 'react';
import CurrentDay from "./CurrentDay"
import CalendarBody from './CalendarBody'
import './style.scss';

class Calendar extends React.Component {
    constructor(props){
        super (props);
        this.state ={
            currendDay: new Date()
            }
        
    }

    render() {        
        const {currendDay} =this.state;
        console.log(currendDay)
        return (
            <div  className='calendar'>
                <CurrentDay day = {currendDay}/>
                <CalendarBody />
            </div>
        );
    }
}

export default Calendar;
