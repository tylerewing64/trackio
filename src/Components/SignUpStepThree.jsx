import React from "react";
import ResumeUpload from "./ResumeUpload";
import { jobTypes } from "../hardCodedValues/jobTypesSignupTwoPage";

function SignUpStepThree({
  handleBackButton,
  setCity,
  setState,
  setCountry,
  city,
  state,
  country,
  set_roles_interested_in,
  roles_interested_in,
}) {
  return (
    <>
      <div className="signUpStep-container-height">
        <label className="text-sm text-gray-400">Step 3 of 3</label>

        <h1 className="text-3xl md:text-4xl font-semibold text-white py-2 break-words">
          Tell us about your self
        </h1>
        <div>
          <label className="text-sm text-gray-400">
            Upload your resume (optional)
          </label>
          <ResumeUpload
            colorOne={"border-white"}
            colorTwo={"bg-gray-900"}
            iconColor={"white "}
            textColor={"text-white"}
          />
        </div>
        <div>
          <label className="text-sm text-gray-400">
            What roles are your interested in?(optional)
          </label>
          <select
            className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none"
            onChange={(e) => set_roles_interested_in(e.target.value)}
            value={roles_interested_in}
          >
            {jobTypes &&
              jobTypes.map((job) => <option value={job}>{job}</option>)}
            <option selected>I am intrested in...</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-400">
            Where are you interested in working?(optional)
          </label>
          <div className="flex space-x-4">
            <input
              className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-3 rounded-lg bg-green-500 text-black text-m font-bold active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all mt-3"
        >
          Register
        </button>
        <p
          className="font-medium text-base text-center text-gray-400 cursor-pointer mt-3"
          onClick={() => {
            handleBackButton();
          }}
        >
          Back
        </p>
      </div>
    </>
  );
}

export default SignUpStepThree;
