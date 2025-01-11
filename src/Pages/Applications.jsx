import React, { useEffect, useState } from "react";
import { getApplicationsW_user_id } from "../services/applicationFetches";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ApplictionSearch from "../Components/ApplictionSearch";
import ApplicationTable from "../Components/ApplicationTable";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Popups from "../Components/Popups";
import { createApplication } from "../services/applicationFetches";
import Cookies from "js-cookie";

function Applications() {
  const [applications, setApplications] = useState();
  const [toggleApplicationPopup, setToggleApplicationPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  useEffect(() => {
    async function fn() {
      const response = await getApplicationsW_user_id(
        Number(Cookies.get("id"))
      );
      const data = await response.json();
      setApplications(data);
    }

    fn();
  }, [toggleApplicationPopup]);

  const addApplication = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    if (
      !formObject.job_title ||
      !formObject.job_location ||
      !formObject.job_posting_url
    ) {
      return setErrorMsg("Missing required input field!");
    }
    const response = await createApplication(
      formObject,
      Number(Cookies.get("id"))
    );
    if (response.status === 200) {
      setToggleApplicationPopup(false);
    }
  };

  const application = {};
  return (
    <>
      <div className="ml-8 mr-8 ">
        {toggleApplicationPopup === true ? (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

            <Popups
              handleSubmit={addApplication}
              back={setToggleApplicationPopup}
              errorMsg={errorMsg}
              setErrorMsg={setErrorMsg}
            >
              <span className="text-lg">Add Application</span>
              <span className="text-xs text-red-600">{errorMsg} </span>
              <span className="text-xs italic mt-2">Job Title*</span>
              <input
                type="text"
                className="font border-b border-gray-600 outline-none  text-sm"
                name="job_title"
                onChange={() => setErrorMsg("")}
              />
              <span className="text-xs italic mt-2">Company*</span>
              <input
                type="text"
                className="font border-b border-gray-600 outline-none text-sm"
                name="job_company"
                onChange={() => setErrorMsg("")}
              />
              <span className="text-xs italic mt-2">Location*</span>
              <input
                type="text"
                className="font border-b border-gray-600 outline-none text-sm"
                name="job_location"
                onChange={() => setErrorMsg("")}
              />
              <span className="text-xs italic mt-2">URL*</span>
              <input
                type="text"
                className="font border-b border-gray-600 outline-none text-sm"
                name="job_posting_url"
                onChange={() => setErrorMsg("")}
              />
              <span className="text-xs italic mt-2">Description</span>
              <input
                type="text"
                className="font border-b border-gray-600 outline-none text-sm"
                name="job_description"
              />
              <span className="text-xs italic mt-2">Job Salary</span>
              <input
                type="text"
                className="font border-b border-gray-600 outline-none"
                name="job_salary"
              />
              <button
                type="submit"
                className=" text-xs rounded-md p-2 mt-4 bg-dark-green text-white"
              >
                Add Application
              </button>
              <button
                type="submit"
                className=" text-xs rounded-md p-2 mt-2 bg-black text-white"
                onClick={() => setToggleApplicationPopup(false)}
              >
                Back
              </button>
            </Popups>
          </>
        ) : null}
        <ApplictionSearch setApplications={setApplications} />
        <div className="mt-5 text-xs">
          <div className="flex w-full items-center mb-1 cursor-pointer">
            <AddRoundedIcon />
            <button
              className="ml-1 "
              onClick={() => setToggleApplicationPopup(true)}
            >
              New Application
            </button>
          </div>
          <ApplicationTable applications={applications} />
        </div>
      </div>
    </>
  );
}

export default Applications;
