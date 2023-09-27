import React, { useState } from 'react';

const Months = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const months = [
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();


  const handleClick = (index) => {
    setSelectedMonth(index);
  };

  return (
    <div>
      <ul className="flex flex-col text-center items-center space-y-3 bg-gradient-to-r from-purple-500 to-pink-500 p-3 lg:p-5  rounded-md
      ">
        {months.map((month, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer font-cinzel text-lg w-full py-3 text-sm md:text-lg lg:text-xl rounded-xl whitespace-nowrap ${selectedMonth === index ? 'bg-pink-500 text-white font-semibold' : 'text-black font-medium'}`}
          >
            {month} {currentYear}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Months;
