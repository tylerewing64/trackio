import React, {useState, useContext} from "react";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {PageStateContext } from '../Context/PageState';

function Sidebar() {
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const { currentPage, setCurrentPage } = useContext(PageStateContext );


  const handlePageSelect = (page) => { 
    setSelectedPage(page);
  }
  return (
    <>
      <div className="h-screen max-w-52 bg-main-color  text-white flex flex-col justify-between ">
        <div className="flex flex-col p-4"> 
          <span className="text-3xl  ">TRACKIO</span>
          <span className={`rounded-md p-1 mt-4  text-sm flex items-center gap-2 hover:bg-main-color-hover cursor-pointer ${selectedPage === 'Dashboard' ? 'text-[#9DFF94]' : null}`}
            onClick={() => {handlePageSelect('Dashboard'); setCurrentPage(0)}}
          >
            <CottageOutlinedIcon />
            Dashboard
          </span>
          <span className= {`rounded-md p-1 mt-4 text-sm flex items-center gap-2 hover:bg-main-color-hover cursor-pointer ${selectedPage === 'Applications' ? 'text-[#9DFF94]' : null}`}
             onClick={() => {handlePageSelect('Applications'); setCurrentPage(1)}}
          >
            <AttachEmailOutlinedIcon  />
            Applications
          </span>
          <span className= {`rounded-md p-1 mt-4 text-sm flex items-center gap-2 hover:bg-main-color-hover cursor-pointer ${selectedPage === 'Resume' ? 'text-[#9DFF94]' : null}`}
            onClick={()=> {handlePageSelect('Resume'); setCurrentPage(3)}}
          >
            <ArticleOutlinedIcon />
            Resume
          </span>
          <span  className= {`rounded-md p-1 mt-4 text-sm flex items-center gap-2 hover:bg-main-color-hover cursor-pointer ${selectedPage === 'Settings' ? 'text-[#9DFF94]' : null}`}
            onClick={()=> {handlePageSelect('Settings'); setCurrentPage(2)}}
          >
            <SettingsOutlinedIcon />
            Settings
          </span>
        </div>
        <span className="text-m p-4 flex gap-2 cursor-pointer text-sm">
          <LogoutOutlinedIcon/>
          Login
        </span>
      </div>
    </>
  );
}

export default Sidebar;
