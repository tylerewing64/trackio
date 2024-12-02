import React, {useContext} from 'react'
import PageState from '../Context/PageState';
import StatsTabs from '../Components/StatsTabs';
import DashboardChart from '../Components/DashboardChart';
import {UserStateContext} from '../Context/UserState'

function Dashboard() {
  const {userState, setUserState}= useContext(UserStateContext);

  console.log(userState)
  return (
    <div className='p-4 ml-5'>
      <StatsTabs />
      <DashboardChart />
    </div>
  )
}

export default Dashboard