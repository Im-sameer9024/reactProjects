import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    navigate,
    setShowUserLogin,
    setSearchQuery,
    searchQuery,
    getCartCount
  } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery, navigate]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to={"/"}>
        <img className="h-9" src={assets.logo} loading="lazy" alt="Logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-gray-500 hover:text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-gray-500 hover:text-gray-700"
          }
        >
          All Products
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-gray-500 hover:text-gray-700"
          }
        >
          Contact
        </NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <Link to={"/cart"} className="relative cursor-pointer group">
          {/*---------- cart icons is here ------------- */}
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-8 opacity-80"
          />
          <span className="absolute -top-2 -right-3 text-xs text-white bg-btn group-hover:bg-btnDark w-[18px] h-[18px] rounded-full flex items-center justify-center">
            {getCartCount()}
          </span>
        </Link>

        {!user ? (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-8 py-2 bg-btn hover:bg-btnDark transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className=" relative group">
            <img src={assets.profile_icon} alt="profile" className=" w-10" />
            <ul className=" absolute hidden group-hover:block bg-white shadow-md top-10 right-0 w-[100px] p-2 rounded-lg py-2 text-sm text-gray-500">
              <li className=" hover:bg-gray-200 px-2 py-1 cursor-pointer">
                My Order
              </li>
              <li className=" hover:bg-gray-200 px-2 py-1 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className=" flex items-center gap-6 sm:hidden">
        <Link to={"/cart"} className="relative cursor-pointer group">
          {/*---------- cart icons is here ------------- */}
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-8 opacity-80"
          />
          <span className="absolute -top-2 -right-3 text-xs text-white bg-btn group-hover:bg-btnDark w-[18px] h-[18px] rounded-full flex items-center justify-center">
            {getCartCount()}
          </span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className=""
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>
      </div>

      {/*------------------- Mobile Menu---------------- */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-20`}
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-gray-500 hover:text-gray-700"
          }
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/products"}
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-gray-500 hover:text-gray-700"
          }
        >
          All Products
        </NavLink>
        {user && (
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "text-green-500" : "text-gray-500 hover:text-gray-700"
            }
          >
            My Orders
          </NavLink>
        )}

        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-gray-500 hover:text-gray-700"
          }
        >
          Contact
        </NavLink>

        {user ? (
          <button
            onClick={logout}
            className="cursor-pointer px-6 py-2 mt-2 bg-btn hover:bg-btnDark transition text-white rounded-full text-sm"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-6 py-2 mt-2 bg-btn hover:bg-btnDark transition text-white rounded-full text-sm"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
