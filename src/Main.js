import React, {useState, useContext, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import './Login.css'
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Applications from './Pages/Applications';
import Settings from './Pages/Settings';
import Resume from './Pages/Resume';
import Notifications from './Components/Notifications';
import {PageStateContext } from './Context/PageState';
import {UserStateContext} from './Context/UserState'
import { Routes, Route } from "react-router-dom";
import Cookies from 'js-cookie'

function Main() {
  const { currentPage, setCurrentPage } = useContext(PageStateContext);
  const {userState, setUserState}= useContext(UserStateContext);
  //HARD CODED VALUE TO TEST 
  

  const pages = [
    <Dashboard />, 
    <Applications/>, 
    <Settings/>, 
    <Resume />

  ]

  useEffect(()=> { 
   
  },[])



  return (
    <div className='flex w-screen'>
      <Sidebar/>
        <div className=' w-full'>
          <Notifications />
          {pages[currentPage]}
        </div>
    </div>
  );
}

export default Main;
