import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function ApplictionSearch() {
  return (
    <div className='text-sm '>
        <div className='p-1 rounded-lg w-full border-2 outline-none flex items-center bg-secondary-color'>
        <select 
            className='outline-none bg-none  rounded-lg p-1.5'>
            <option>Company Name</option>
            <option>Title</option>
            <option>Location</option>
        </select>
        <input 
            type = 'text'
            className=' p-1 outline-none w-full ml-4  rounded-md pl-2 mr-2 bg-secondary-color'
        />
        <SearchRoundedIcon />
        </div>
  </div>
  )
}

export default ApplictionSearch