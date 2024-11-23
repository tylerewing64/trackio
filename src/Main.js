import React, {useState, useContext} from 'react'
import logo from './logo.svg';
import './App.css';
import './Login.css'
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Applications from './Pages/Applications';
import Subscriptions from './Pages/Subscriptions';
import Resume from './Pages/Resume';
import Notifications from './Components/Notifications';
import {PageStateContext } from './Context/PageState';
import {UserStateContext} from './Context/UserState'
import { Routes, Route } from "react-router-dom";

function Main() {
  const { currentPage, setCurrentPage } = useContext(PageStateContext);
  const {userState, setUserState}= useContext(UserStateContext);
  //HARD CODED VALUE TO TEST 
  setUserState('Tyler Ewing');

  const pages = [
    <Dashboard />, 
    <Applications/>, 
    <Subscriptions/>, 
    <Resume />

  ]


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
