import { format } from 'date-fns';
import React from 'react';
import '../style.scss';

const CurrentDay = (props) => {
    const {day} = props;
    return (
        <div className='calendarBody'>
            <p>{format(day,'cccc')}</p>
            <p>{format(day,'d')}</p>
        </div>
    );
}

export default CurrentDay;
