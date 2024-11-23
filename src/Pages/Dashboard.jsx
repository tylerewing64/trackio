import React, {useContext} from 'react'
import PageState from '../Context/PageState';
import StatsTabs from '../Components/StatsTabs';
import DashboardChart from '../Components/DashboardChart';
function Dashboard() {
 
  
  return (
    <div className='p-4 ml-5'>
      <StatsTabs />
      <DashboardChart />
    </div>
  )
}

export default Dashboard