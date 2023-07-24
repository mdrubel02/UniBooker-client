import React from 'react';

const DateInput = ({ value, onChange }) => {
  const handleDateChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input type="date" value={value} onChange={handleDateChange} 
    className="file-input file-input-bordered w-full text-accent "
    />
  );
};

export default DateInput;