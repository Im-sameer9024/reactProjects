/* eslint-disable react/prop-types */
import { assets } from "../assets/assets"

const Navbar = ({ setToken }) => {
  return (
    <div className=" flex items-center py-2 px-[4%] justify-between">
      <img src={assets.logo} alt="" className=" w-20 " />
      <button onClick={() => setToken('')} className=" bg-gray-600 text-white px-5 font-smallHeading  py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Log Out</button>
    </div>
  )
}

export default Navbar
