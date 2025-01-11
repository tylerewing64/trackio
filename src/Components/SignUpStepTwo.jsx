import React, { useState } from "react";
import DatePicker from "./DatePicker";

function SignUpStepTwo({
  password,
  setPassword,
  setDob,
  username,
  setUserName,
  handleBackButton,
  setDate,
  setYear,
  setMonth,
  month,
  year,
  date,
}) {
  return (
    <>
      <div className="signUpStep-container-height">
        <label className="text-sm text-gray-400">Step 2 of 3</label>
        <h1 className="text-3xl md:text-4xl font-semibold text-white py-2 break-words">
          Create your account
        </h1>
        <div>
          <label className="text-sm text-gray-400">Password*</label>
          <input
            className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter a password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-gray-400">Username*</label>
          <input
            className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter an username"
            required
            type=""
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <label className="text-sm text-gray-400">Date Of Birth*</label>
        <DatePicker
          month={month}
          date={date}
          year={year}
          setDate={setDate}
          setMonth={setMonth}
          setYear={setYear}
        />

        <div className="mt-8 flex flex-col gap-y-4">
          <button
            type="submit"
            className="py-3 rounded-lg bg-green-500 text-black text-m font-bold active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all"
          >
            Next
          </button>

          <p
            className="font-medium text-base text-center text-gray-400 cursor-pointer"
            onClick={() => {
              handleBackButton();
            }}
          >
            Back
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUpStepTwo;
