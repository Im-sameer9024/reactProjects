import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";




export default function Sidebar() {


  return (
<div className=" sidebar boder border-black h-[100vh] border-r-2 w-2/12 jus flex flex-col items-end   gap-3 ">
     <NavLink  to="/add" className=" mt-3 flex w-10/12 justify-evenly border border-r-0 py-1 border-black ">
      <img src={assets.add_icon} alt="" />
      <p>Add Items</p>
     </NavLink>
     <NavLink to="/list" className=" mt-3 flex w-10/12 justify-evenly border border-black  py-1 border-r-0  ">
      <img src={assets.order_icon} alt="" />
      <p>List Items</p>
     </NavLink>
     <NavLink to="/order" className=" mt-3 flex w-10/12 justify-evenly border border-black  py-1 border-r-0  ">
      <img src={assets.order_icon} alt="" />
      <p>Order</p>
     </NavLink>
    </div>
  )
}
