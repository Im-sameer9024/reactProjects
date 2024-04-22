import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Signup from './components/Signup'
import Dashboard from './Pages/Dashboard'
import Login from './components/Login'

const App = () => {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className='w-[100vw] h-full pb-[5rem] text-white' id='darkBlue'>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>


        </Routes>
    </div>
  )
}

export default App
