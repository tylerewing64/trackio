import React from 'react'

const obj = { 
    'outbound': 300, 
    'callbacks': 400, 
    'interviews': 5, 
    'offers': 1, 
    'apptointerview':1.3,
    'costperapp':.75

}

function StatsTabs() {
  return (
    <>
    <select className='bg-transparent mb-1 outline-none'>
        <option>Today</option>
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
        <option>Last 3 Months</option>
        <option>Last 6 Months</option>
        <option>This Year</option>
    </select>
    <div className= 'grid grid-rows-2 grid-flow-col gap-5 text-xs'>

        <div className='bg-white p-4 rounded-md '><span className='text-3xl block'>{obj['outbound']}</span>Outbound Applications</div>
        <div className='bg-white p-4 rounded-md'><span className='text-3xl block'>{obj['callbacks']}</span>Callbacks</div>
        <div className='bg-white p-4 rounded-md'><span className='text-3xl block'>{obj['interviews']}</span>Interviews</div>
        <div className='bg-white p-4 rounded-md'><span className='text-3xl block'>{obj['offers']}</span>Offers</div>
        <div className='bg-white p-4 rounded-md'><span className='text-3xl block'>{obj['apptointerview']}%</span>Application To Interview Rate</div>
        <div className='bg-white p-4 rounded-md'><span className='text-3xl block'>{obj['costperapp']}</span>Cost Per Application</div>
    </div>
    </>
  )
}

export default StatsTabs