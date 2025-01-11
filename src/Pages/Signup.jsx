import React, { useState } from "react";
import SignUpStepTwo from "../Components/SignUpStepTwo";
import SignUpStepOne from "../Components/SignUpStepOne";
import SignUpStepThree from "../Components/SignUpStepThree";
import { createUser } from "../services/userFetches";
export default function Signup({ children }) {
  const [stepNumber, setStepNumber] = useState(0);
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [month, setMonth] = useState();
  const [date, setDate] = useState();
  const [year, setYear] = useState();
  const [dob, setDob] = useState();
  const [roles_intrested_in, set_roles_interested_in] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (stepNumber < 2) {
      setStepNumber((stepNumber) => {
        return stepNumber + 1;
      });
    } else {
      const formData = createFormObj();
      const response = await createUser(formData);
    }
  };

  const createDate = (month, date, year) => {
    let dateObj = new Date(year, month, date);

    return dateObj;
  };
  const createFormObj = () => {
    const location_preference = city + ", " + state + ", " + country;
    const formObj = new FormData();
    setDob(createDate(month, date, year));
    formObj.append("username", username);
    formObj.append("password", password);
    formObj.append("email", email);
    formObj.append("dob", dob);
    formObj.append("location_preference", location_preference);
    formObj.append("role_preference", roles_intrested_in);

    return formObj;
  };

  const handleBackButton = () => {
    setStepNumber((stepNumber) => {
      return stepNumber - 1;
    });
  };
  const signUpSteps = [
    <SignUpStepOne email={email} setEmail={setEmail} />,
    <SignUpStepTwo
      username={username}
      setUserName={setUserName}
      setPassword={setPassword}
      password={password}
      handleBackButton={handleBackButton}
      setDob={setDob}
      month={month}
      date={date}
      year={year}
      setDate={setDate}
      setMonth={setMonth}
      setYear={setYear}
    />,
    <SignUpStepThree
      setStepNumber={setStepNumber}
      handleBackButton={handleBackButton}
      city={city}
      state={state}
      country={country}
      setCity={setCity}
      setState={setState}
      setCountry={setCountry}
      roles_intrested_in={roles_intrested_in}
      set_roles_interested_in={set_roles_interested_in}
    />,
  ];
  return (
    <div className="grid min-h-screen flex items-center justify-center bg-black">
      <div className="p-8 md:p-12 rounded-2xl border-2 border-gray-700 bg-gray-900 w-full max-w-md shadow-lg">
        <form enctype="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
          {signUpSteps[stepNumber]}
        </form>
      </div>
    </div>
  );
}
