import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo  from '../assets/Logo.svg'
import toast from 'react-hot-toast'

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {

    

  return (
    <div>
        <nav className=' w-full px-3  pt-4 sm:w-10/12 justify-around  items-center mx-auto flex '>
            <div className="  sm:block hidden ">
                <Link to="/">
                    <img src={logo} alt="Logo" width={160} height={32} loading='lazy' />
                </Link>
            </div>
            <ul className='flex gap-3'>
                <li className=' hover:text-sky-300'><NavLink to="/">Home</NavLink></li>
                <li className=' hover:text-sky-300'><NavLink to="/about">About</NavLink></li>
                <li className=' hover:text-sky-300'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className='gap-3 flex '>
                {
                    !isLoggedIn && <Link to='/login'>
                    <button className='hover:text-sky-300 border border-gray-600 bg-white bg-opacity-15 px-3 py-2 rounded-md'>
                        Log In
                    </button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to='/signup'>
                    <button className='hover:text-sky-300 border border-gray-600 bg-white bg-opacity-15 px-3 py-2 rounded-md'>
                        Sign Up
                    </button>
                    </Link>
                }
                {
                    isLoggedIn && <Link to='/'>
                    <button className='hover:text-sky-300 border border-gray-600 bg-white bg-opacity-15 px-3 py-2 rounded-md' onClick={()=>{ setIsLoggedIn(false); toast.success("Logged Out"); } }>
                        Log Out
                    </button>
                    </Link>
                }
                {
                    isLoggedIn && <Link to='/home'>
                    <button className='hover:text-sky-300 border border-gray-600 bg-white bg-opacity-15 px-3 py-2 rounded-md'>
                        Dashboard
                    </button>
                    </Link>
                }
            </div>
        </nav>
    </div>
  )
}

export default Navbar
