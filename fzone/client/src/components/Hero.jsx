import { useEffect } from "react";
import { assets } from "../assets/assets";
import { motion } from 'framer-motion'
import AOS from 'aos'
export default function Hero() {



  const pageVariants = {
    initial: {
      opacity: 0, // Component is initially invisible
    },
    in: {
      opacity: 1, // Component becomes fully visible
    },
    out: {
      opacity: 0, // Component becomes invisible when it exits
    },
  };


  const pageTransition = {
    type: "tween", // Use 'tween' for a smooth transition without spring physics
    ease: "easeInOut", // Ease-in-out for a smoother feel
  
    duration: 1, // Smooth transition over 1.5 seconds
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize duration here
      once: true,     // Whether the animation should only happen once
    });
  }, []);


  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className=" flex flex-col sm:flex-row border border-gray-400 ">

      {/* Hero Left Side  */}
      <div data-aos="fade-up" className=" w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className=" w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className=" font-medium text-sm md:text-base font-smallHeading">OUR BESTSELLERS</p>
          </div>
          <h1 className=" text-3xl sm:py-3 lg:text-5xl leading-relaxed font-content">Latest Arrivals</h1>
          <div className=" flex items-center gap-2">
            <p className=" font-semibold text-sm md:text-base font-smallHeading">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>

          </div>

        </div>

      </div>

      {/* Hero Right Side  */}
      <img data-aos="fade-up" src={assets.hero_img} alt="img" className="w-full sm:w-1/2" />

    </motion.div>
  )
}
