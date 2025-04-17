import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className=" relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className=" w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className=" w-full block  md:hidden"
      />
      {/*-------------------- text part ---------------- */}
      <div className=" absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 text-center">
          Freshness You Can Trust, Savings You will Love!
        </h1>
        <div className=" flex items-center mt-6 font-medium">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3  transition-all duration-300 rounded  cursor-pointer text-white  w-fit bg-btn hover:bg-btnDark"
          >
            Shop Now
            <span className="md:hidden group-hover:translate-x-1 transition-all duration-300">
              <FaArrowRightLong />
            </span>
          </Link>

          <Link
            to={"/products"}
            className="group hidden  md:flex items-center gap-2 px-9 py-3 cursor-pointer transition-all duration-300  w-fit"
          >
            Explore Deals
            <span className=" group-hover:translate-x-1 transition-all duration-300">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
