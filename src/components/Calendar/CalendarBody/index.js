import React from 'react';
import Week from './Week';
import Month from './Month';
import '../style.scss';

const CalendarBody = () => {

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return (
        <table className='CalendarBody'>
            <thead>
                <tr>
                    {weekDays.map(d => <td>{d}</td>)}
                </tr>
            </thead>
            <Month month= '12' />

        </table>
    );
}

export default CalendarBody;
