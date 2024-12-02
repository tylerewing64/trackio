import React, {useRef} from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {getFilteredApplications } from '../services/applicationFetches'
import Popups from '../Components/Popups'
function ApplictionSearch({setApplications}) {
  const searchType = useRef(null);

  const handleKeyDown = async(e) => { 
    if(e.key === 'Enter'){ 
       const response = await getFilteredApplications(e.target.value, 1, searchType.current.value );
       const data = await response.json();
       setApplications(data);
    } 
  }


  const handleChange = async(e) => { 
    const response = await getFilteredApplications(e.target.value, 1, searchType.current.value );
       const data = await response.json();
       setApplications(data);

  }
  return (
    <div className='text-sm '>
    
        <div className='p-1 rounded-lg w-full border-2 outline-none flex items-center bg-secondary-color'>
        <select 
            className='outline-none bg-none  rounded-lg p-1.5' ref = {searchType}>
            <option value = "job_company">Company Name</option>
            <option value = "job_title">Title</option>
            <option value = "job_location">Location</option>
        </select>
        <input 
            type = 'text'
            className=' p-1 outline-none w-full ml-4  rounded-md pl-2 mr-2 bg-secondary-color'
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => handleChange(e)}
        />
        <SearchRoundedIcon />
        </div>
  </div>
  )
}

export default ApplictionSearch