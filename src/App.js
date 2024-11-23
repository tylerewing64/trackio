import React from 'react'
import Main from '../src/Main'
import Login from '../src/Pages/Login'
import Signup from './Pages/Signup';
import Forget from './Pages/forget';
import AuthenticationPage from './Pages/AuthenticationPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <> 
    <Routes>
        <Route path='/' element={ <Login/> } />
        <Route path = '/home' element= { <AuthenticationPage />} />
        <Route path='/r' element={ <Signup/> } />
        <Route path='/f' element={ <Forget/> } />
    
      </Routes>
   </>
  )
}

export default App