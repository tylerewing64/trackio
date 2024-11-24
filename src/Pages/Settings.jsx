import React from 'react'
import ResumeUpload from '../Components/ResumeUpload'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Switch from '@mui/material/Switch';

function Settings() {
  return (
    <div className='px-8'>
      <div className='overflow-y-auto h-50vh'>
      <ResumeUpload/>
      
        <div className='border-2 mt-4 p-4 rounded-md flex-col flex '>
          <h2 className='font-bold'>Targeted Roles</h2>
          <span className='text-xs'>Specify the type of roles you are interested in.</span>
          <input 
            type = 'text'
            className='rounded-lg mt-1 outline-none px-3 border-secondary-color border-2'
          />
        </div>
        <div className='border-2 mt-4 p-4 rounded-md flex-col flex'>
          <h2 className='font-bold'>Priority Applications</h2>
          <span className='text-xs'>Target job applications by job posting date.</span>
          <select 
            
            className='rounded-lg mt-4 outline-none p-1 text-sm border-secondary-color border-2'
          >
            <option>24 Hours</option>
            <option>3 Days</option>
            <option>7 Days</option>
            <option>2 Weeks</option>
          </select>
        </div>
        <div className='border-2 mt-4 p-4 rounded-md flex-col flex'>
          <h2 className='font-bold'>Resume Tailoring</h2>
          <div className='flex items-center justify-between'>
            <span className='text-xs'>Tailor resume to match job description.</span>
            <Switch  defaultChecked />
          </div>
        </div>
        <div className='border-2 mt-4 p-4 rounded-md flex-col flex'>
          <h2 className='font-bold'>Location</h2>
          <span className='text-xs'>Specify the locations you are interested in.</span>
          <input 
            type = 'text'
            className='rounded-lg mt-1 outline-none px-3 border-secondary-color border-2'
          />
        </div>
        <div className='border-2 mt-4 p-4 rounded-md  flex justify-between'>
          <h2 className='font-bold'>Change Plan</h2>
          <InsertLinkIcon/>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-4'> 
        <button className='bg-green-600 text-white p-3 rounded-md text-sm w-32'>Save</button>
      </div>
    </div>
  )
}

export default Settings