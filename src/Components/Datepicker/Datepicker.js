import { format } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({onChange,selectedDate}) => {
    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");

    // let footer = <p>Please pick a day.</p>;
    // if (selected) {
    //   let footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    // }
    return (
        
      <>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        
      />

      </>
       
    );
};

export default Datepicker;
