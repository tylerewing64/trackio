import React from 'react'
import Main from '../src/Main'
import Login from '../src/Pages/Login'
import Signup from './Pages/Signup';
import Forget from './Pages/forget';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <> 
    <Routes>
        <Route path='/' element={ <Login/> } />
        <Route path='/r' element={ <Signup/> } />
        <Route path='/f' element={ <Forget/> } />
        <Route path='home' element={ <Main/> } />
      </Routes>
   </>
  )
}

export default App