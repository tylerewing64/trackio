import React from 'react'
import Main from '../src/Main'
import Login from '../src/Pages/Login'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <> 
    <Routes>
        <Route path='/' element={ <Login/> } />
        <Route path='home' element={ <Main/> } />
      </Routes>
   </>
  )
}

export default App