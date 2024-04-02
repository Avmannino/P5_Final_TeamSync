import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Schedules.css';
import 'react-calendar/dist/Calendar.css';

function Schedules() {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(nextMonth);
  };

  return (
    <div className='schedules-page'>
      <div className='schedules-container'>
        <hr className='horizontal-line'></hr>
        <div className='calendar'>
          <Calendar
            value={date}
            onChange={setDate}
          />
          </div>
        </div>
      </div>
  );
}

export default Schedules;
