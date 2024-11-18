import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

import Sidebar from './Sidebar';
import Login from './Pages/Login';

import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Applications from './Components/Applications';
import Subscriptions from './Components/Subscriptions';
import Resume from './Components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <Dashboard />, 
    <Applications/>, 
    <Subscriptions/>, 
    <Resume />

  ]


  return (

    <div className='flex'>
    <Sidebar 
    setCurrentPage = {setCurrentPage}
    />
    {pages[currentPage]}
    

  );
}

export default App;
