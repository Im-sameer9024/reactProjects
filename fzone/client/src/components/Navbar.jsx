/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import useNavbar from '../hooks/useNavbar.jsx';

export default function Navbar({ loading }) {

  const { visible, open, close, assets,bgColor } = useNavbar()
  

 



  return (

    <div className={`w-[100vw]  ${bgColor} fixed top-0 z-20 `} >
      <div className=" w-10/12 flex items-center justify-between py-2 mx-auto font-medium ">

        {/*-------------- Logo---------  */}
        <Link onClick={loading} to="/">
          <img src={assets.logo} alt="" className='w-20' />
        </Link>


        {/* ----------------Pages  ---------------*/}
        <ul className=' hidden sm:flex gap-5 text-sm text-gray-700 font-heading '>

          {
            ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((link, index) => {
              return (
                <NavLink onClick={loading} key={index} to={`/${link == 'HOME' ? "" : link.toLowerCase()}`} className="flex flex-col items-center gap-1">
                  <p>{link}</p>
                  <hr className=' w-2/4 border-none h-[2.5px] bg-gray-700 hidden' />
                </NavLink>
              )
            })
          }
        </ul>


        {/*------------ search cart profile-----------  */}
        <div className=' flex items-center gap-6'>

          {/*----------- Search icon-------------  */}
          <div >
            <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
          </div>

          {/*--------------- Profile icon ---------------- */}
          <div className='group relative'>

            <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />

            {/*--------------- Dropdown menu----------  */}

            <div className=' group-hover:block hidden absolute dropdown-menu right-0 pt-2 z-10'>
              <div className=' flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
                <p className=' cursor-pointer hover:text-black'>My Profile</p>
                <p className=' cursor-pointer hover:text-black'>Orders</p>
                <p className=' cursor-pointer hover:text-black'>Log out</p>
              </div>
            </div>



          </div>

          {/*----------- Cart------------  */}

          <Link to="/cart" className=' relative'>
            <img src={assets.cart_icon} alt="log" className='w-5 min-w-5' />
            <p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>2</p>
          </Link>


          {/*----------------- menu icons for mobile screen  ---------------------*/}

          <img onClick={open} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden' />

        </div>

        {/* -----------------sideBar menu for mobile screen  ------------------*/}

        <div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white duration-1000 ease transition-all ${visible ? "w-full z-20" : "w-0"} `}>

          <div className=' flex flex-col text-gray-600'>
            <div onClick={close} className=' flex items-center gap-1 p-3 cursor-pointer '>
              <span> <IoIosArrowBack /> </span>
              <p className='font-heading'>BACK</p>
            </div>
            {
              ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((link, index) => {
                return (
                  <NavLink onClick={close} key={index} to={`/${link == 'HOME' ? "" : link.toLowerCase()}`} className="py-2 pl-6 border hover:text-black hover:font-bold">
                    {link}
                  </NavLink>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>

  )
}
