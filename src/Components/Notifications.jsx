import React, {useContext} from 'react'
import {UserStateContext} from '../Context/UserState'
import { PageStateContext } from '../Context/PageState';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
function Notifications() {
  const {userState, setUserState}= useContext(UserStateContext);
  const { currentPage, setCurrentPage } = useContext(PageStateContext);

  const obj ={ 
    0: 'Dashboard', 
    1: 'Applications',
    2: 'Settings',
    3: 'Resume'
  }

  return (
    <div className='p-4 flex items-center justify-between w-full	'>
      <h2 className='text-2xl  ml-5 font-bold'>{obj[currentPage]}</h2>
      <div className='flex items-center text-slate-500 cursor-pointer'>
        <NotificationsNoneOutlinedIcon />
        <span className=' text-sm	'>
          {userState ? userState : null}
        </span>
      </div>
    </div>
  )
}

export default Notifications