import React, { useState } from "react";

function DatePicker({ month, setMonth, date, setDate, year, setYear }) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="flex justify-between space-x-4">
      <select
        className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none "
        onChange={(e) => setMonth(e.target.value)}
        value={month}
      >
        {monthNames &&
          monthNames.map((month, index) => (
            <option value={index}> {month}</option>
          ))}
      </select>
      <input
        className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none "
        placeholder="DD"
        maxLength={2}
        required
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <input
        className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none"
        placeholder="YYYY"
        maxLength={4}
        required
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
    </div>
  );
}

export default DatePicker;
