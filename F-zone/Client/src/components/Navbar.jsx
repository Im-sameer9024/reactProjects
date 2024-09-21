import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setVisible } from '../redux/fetures/cartSlice.js';
import { useEffect, useState } from 'react';


export default function Navbar() {

  const visible = useSelector((state) => state.cart.visible)
  const dispatch = useDispatch()

  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("bg-white shadow-md");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` w-[100vw]  sticky top-0 ${bgColor}`}>

      <nav className=' w-11/12 md:w-10/12 mx-auto flex justify-between items-center'>
        {/* Logo  */}
        <Link to="/">
          <img src={assets.logo} alt="logo" width="60px" />
        </Link>

        {/* Pages  */}
        <ul className=' hidden font-smallHeading md:flex gap-[2rem]'>
          <li>
            <NavLink to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/collection">
              COLLECTION
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* Search cart and user  */}

        <div className=' flex gap-[1.3rem] items-center relative py-2'>
          {/* search  */}
          <div className='cursor-pointer'>
            <img src={assets.search_icon} alt="search" className='w-5' />
          </div>

          {/* user  */}
          <div className='group cursor-pointer'>
            <img src={assets.profile_icon} alt="" className='w-5 group' />
            <div className=' hidden group-hover:block  cursor-pointer bg-blue-50 rounded-md left-[-29px] top-[2.1rem]] absolute shadow-lg px-3 py-2'>
              <ul className='w-full flex flex-col font-smallHeading '>
                <li className='hover:font-semibold'>My Profile</li>
                <li className='hover:font-semibold'>Orders</li>
                <li className='hover:font-semibold'>Log Out</li>
              </ul>
            </div>
          </div>

          {/* cart  */}
          <div className='cursor-pointer relative'>
            <img src={assets.cart_icon} alt="" className='w-5' />
            <div className='w-4 h-4 text-[0.7rem] flex items-center justify-center absolute bg-black text-white rounded-full bottom-[-5px] right-[-5px] font-bold'>
              10
            </div>
          </div>

          {/* menu Icons for mobile screen  */}
          <div className=' block md:hidden' onClick={() => dispatch(setVisible(true))}>
            <img src={assets.menu_icon} alt="icon" className='w-5' />
          </div>

        </div>

      </nav>
      <div className={` bg-slate-50 overflow-hidden transition-all ease-linear duration-300 absolute top-0 right-0 bottom-0 ${visible ? "w-[80%]" : "w-0"} h-screen `}>
        <button onClick={() => dispatch(setVisible(false))} className=' flex items-center gap-2 relative top-2 left-2 px-2'>
          <span>
            <FaArrowLeft />
          </span>
          Back
        </button>

        {/* Home  */}

        <div className=' mt-4 w-full z-10'>
          <ul className=' w-full font-smallHeading md:flex gap-[2rem]'>
            <li onClick={() => dispatch(setVisible(false))} className=' hover:font-semibold'>
              <hr className='border mb-2' />
              <Link to="/" className='pl-4'>
                HOME
              </Link>
            </li>

            {/* Collection  */}
            <li onClick={() => dispatch(setVisible(false))} className=' hover:font-semibold'>
              <hr className='border mb-2' />
              <Link to="/collection" className='pl-4'>
                COLLECTION
              </Link>
            </li>


            {/* About  */}
            <li onClick={() => dispatch(setVisible(false))} className=' hover:font-semibold'>
              <hr className='border mb-2' />

              <Link to="/about" className='pl-4'>
                ABOUT
              </Link>
            </li>

            {/* Contact  */}
            <li onClick={() => dispatch(setVisible(false))} className=' hover:font-semibold'>
              <hr className='border mb-2' />
              <Link to="/contact" className='pl-4'>
                CONTACT
              </Link>
              <hr className='border mb-2' />
            </li>
          </ul>

        </div>
      </div>

    </div>
  )
}
