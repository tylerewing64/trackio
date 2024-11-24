import React from 'react'
import UploadIcon from '@mui/icons-material/Upload';
function ResumeUpload() {
  return (
    <div 
        className='rounded-lg border-2 border-secondary-color border-dotted h-24 flex-col flex items-center 
        justify-center cursor-pointer bg-gray-100 '>
        <div className='flex items-center '>
            <UploadIcon/>
            <div className='ml-4'>Upload Resume </div>

        </div>
    </div>
  )
}

export default ResumeUpload