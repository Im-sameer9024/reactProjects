/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { StoreContext } from "../../Context-API/StoreContext";

export default function Navbar({setShowLogin}) {
  const [page, setPage] = useState("home");

  const {getTotalCartAmount} =useContext(StoreContext)

  function moveDown(id){
    const element = document.getElementById(id);
    if (element) {
     element.scrollIntoView({behavior:"smooth"})
    }
  }
  

  return (
    <div className=" overflow-x-hidden px-3 navbar w-10/12 mx-auto flex justify-between items-center py-4">
      <div className="">
        <h1 className=" text-[3rem] font-heading text-red-500">Tomoto.</h1>
      </div>
      <ul className=" font-content text-[1.2rem] flex gap-4">
        <li
          onClick={() => setPage("home")}
          className={`flex items-center justify-center ${
            page === "home" ? "active" : " "
          } `}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setPage("menu")}
          className={`flex items-center justify-center  ${
            page === "menu" ? "active" : " "
          }`}
        >
          <Link onClick={()=>moveDown("menu")} to="#menu">Menu</Link>
        </li>
        <li
          onClick={() => setPage("mobile-app")}
          className={`flex items-center justify-center ${
            page === "mobile-app" ? "active" : ""
          }`}
        >
          <Link onClick={()=> moveDown('App')}>Mobile-App</Link>
        </li>
        <li
          onClick={() => setPage("contact-us")}
          className={`flex items-center justify-center ${
            page === "contact-us" ? "active" : ""
          }`}
        >
          <Link onClick={()=> moveDown('Contact')}>Contact-Us</Link>
        </li>
      </ul>
      {/* mobile Screen 
      <div>
        <div onClick={()=>setShowNav(!showNav)}>
          <RxHamburgerMenu />
        </div>
        {
        showNav && <div className=" bg-slate-300 z-10 px-3 absolute py-4">
          <ul className="font-content text-[1.2rem] flex flex-col gap-4">
            <li
              onClick={() => setPage("home")}
              className={`flex items-center justify-center ${
                page === "home" ? "active" : " "
              } `}
            >
              <Link>Home</Link>
            </li>
            <li
              onClick={() => setPage("menu")}
              className={`flex items-center justify-center  ${
                page === "menu" ? "active" : " "
              }`}
            >
              <Link>Menu</Link>
            </li>
            <li
              onClick={() => setPage("mobile-app")}
              className={`flex items-center justify-center ${
                page === "mobile-app" ? "active" : ""
              }`}
            >
              <Link>Mobile-App</Link>
            </li>
            <li
              onClick={() => setPage("contact-us")}
              className={`flex items-center justify-center ${
                page === "contact-us" ? "active" : ""
              }`}
            >
              <Link>Contact-Us</Link>
            </li>
          </ul>
        </div>
        }
        
      </div> */}
      <div className=" flex gap-4">
        <div>
          <img src={assets.search_icon} alt="search-icon" />
        </div>
        <div className=" relative">
          <Link to="/cart"><img src={assets.basket_icon} alt="search-icon" /></Link>
          {
            getTotalCartAmount() === 0 ? "":<div className="dot bg-red-500 w-3 h-3 top-1 left-5 rounded-full absolute"></div>
          }
          
        </div>
        <div
          onClick={() => setPage("sign-in")}
          className={`outline outline-slate-400 duration-200 rounded-2xl font-heading flex items-center px-3 ${
            page === "sign-in" ? "active" : " "
          }`}
        >
          <button onClick={()=> setShowLogin(true)}>Sign-In</button>
        </div>
      </div>
    </div>
  );
}
