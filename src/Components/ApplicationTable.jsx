import React from 'react'

function ApplicationTable({applications}) {
  return (
    <div className='overflow-y-auto h-75vh'>
        <table className = 'table-auto border-collapse border border-gray-300 w-full text-left rounded-md text-sm  h-fit    '>
            <thead className='bg-secondary-color font-thin pr-4 sticky top-0'>
            <th  className=' p-2 font-thin '>Date Applied</th>
            <th className=' p-2 font-thin'>Company</th>
            <th className=' p-2 font-thin'>Status</th>
            <th className=' p-2 font-thin'>Title</th>
            <th className=' p-2 font-thin'>Location</th>
            </thead>
            <tbody className=''>
                {applications && applications.map(application => ( 
                       <tr className='border-b cursor-pointer hover:bg-secondary-color'>
                       <td className=' p-2'>{application.date_applied}</td>
                       <td className=' p-2'>{application.company}</td>
                       <td className=' p-2'>{application.status}</td>
                       <td className=' p-2'>{application.job_title}</td>
                       <td className=' p-2'>{application.location}</td>
                       </tr>

                ))}
             
            </tbody>
        </table>
    </div>
  )
}

export default ApplicationTable