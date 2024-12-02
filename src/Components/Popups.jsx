import { Divider } from '@mui/material'
import React from 'react'

function Popups({children, handleSubmit, back, setErrorMsg}) {
  return (
    <div >
        <form onSubmit = {(e) => handleSubmit(e)} className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg   outline-none bg-white p-8 flex flex-col z-20'>
           
            {children}

        </form>
    
    </div>
  )
}

export default Popups