import React from "react";
import course1 from "../assets/img/cat-1.jpg";
import course2 from "../assets/img/cat-2.jpg";
import course3 from "../assets/img/cat-3.jpg";
import course4 from "../assets/img/cat-4.jpg";
import cardCourse1 from "../assets/img/course-1.jpg";
import cardCourse2 from "../assets/img/course-2.jpg";
import cardCourse3 from "../assets/img/course-3.jpg";
import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
// import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { RiGraduationCapFill } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import FadeSlider from "../components/FadeSlider";



const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 50,
  damping: 10,
};

const Home = () => {
  

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className=" w-[100vw] h-auto"
      id="darkBlue"
    >
      {/* Slider  */}
      <div className=" w-10/12 mx-auto h-auto my-[3rem]">
      <FadeSlider/>
      </div>
      
      <div data-aos="fade-up" className="w-11/12  gap-4 flex justify-evenly mx-auto md:my-[4rem]">
        {/* card-1  */}
        <div
          className="w-2/12 flex flex-col items-center p-3 box-border"
          id="lightBlue"
        >
          <RiGraduationCapFill className=" text-blue-500 text-[30px] md:text-[40px] lg:text-[50px]" />
          <h2 className=" text-[0.5rem] md:text-[0.8rem] lg:text-[1.2rem] text-sky-300 font-smallHeading text-center">
            Skilled Instructors
          </h2>
          <p className=" text-[0.4rem] md:text-[0.6rem] lg:text-[0.8rem] text-center font-content">
            Our Instructors is best in every field like as Communicate with
            students,Teaching
          </p>
        </div>

        {/* card-2  */}
        <div className="w-2/12 flex flex-col items-center p-3 box-border" id="lightBlue">
          <TfiWorld className=" text-blue-500 text-[30px] lg:text-[50px]  md:text-[40px]" />
          <h2 className=" text-[0.5rem] md:text-[0.7rem] text-sky-300 font-smallHeading text-center lg:text-[1.2rem]">
            Skilled Instructors
          </h2>
          <p className=" text-[0.4rem] md:text-[0.6rem] text-center font-content lg:text-[0.8rem]">
            Our Instructors is best in every field like as
            Communications,Teaching
          </p>
        </div>
        {/* card-3  */}
        <div className="w-2/12 flex flex-col items-center p-3 box-border" id="lightBlue">
          <FaHome className=" text-blue-500 text-[30px] lg:text-[50px] md:text-[40px]" />
          <h2 className=" md:text-[0.7rem] text-[0.5rem] text-sky-300 font-smallHeading text-center lg:text-[1.2rem]">
            Skilled Instructors
          </h2>
          <p className=" md:text-[0.6rem] text-[0.4rem] text-center font-content lg:text-[0.8rem]">
            Our Instructors is best in every field like as
            Communications,Teaching
          </p>
        </div>
        {/* card-4 */}
        <div className="w-2/12  flex p-3 flex-col items-center" id="lightBlue">
          <FaBookOpen className=" text-blue-500 text-[30px] md:text-[40px] lg:text-[50px]" />
          <h2 className=" md:text-[0.7rem] text-[0.5rem] text-sky-300 font-smallHeading text-center lg:text-[1.2rem]">
            Skilled Instructors
          </h2>
          <p className=" md:text-[0.6rem] mx-4 text-[0.4rem] text-center font-content lg:text-[0.8rem]">
            Our Instructors is best in every field like as
            Communications,Teaching
          </p>
        </div>
      </div>

      {/* Courses Category  */}
      <div className="w-11/12 mx-auto flex flex-col md:my-[4rem]  items-center py-[2rem]">
        {/* Heading  */}

        <h1 data-aos="fade-up" className=" flex gap-4 items-center text-[1rem] md:text-[1.5rem] lg:text-[2rem]">
          <span className="flex flex-col gap-2 items-end ">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
          Courses Categories
          <span className="flex flex-col gap-2">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
        </h1>

        {/* Courses Section  */}
        <div className="w-full flex md:my-[4rem] my-[2rem]">
          {/* left section  */}
          <div data-aos="fade-up" className=" w-7/12 flex flex-col pl-2">
            <div className="box relative">
              <img
                src={course1}
                alt="course"
                className=" relative data-twe-lazy-animation"
                loading="lazy"
              />
              <div className=" bg-white text-black absolute bottom-1 right-1 p-1 flex flex-col justify-center items-center">
                <h2 className="text-[0.6rem] md:text-[1rem] font-smallHeading font-bold lg:text-[1.5rem]">
                  Web Design
                </h2>
                <span className=" text-sky-400 text-[0.5rem] md:text-[0.8rem] lg:text-[1.2rem]">49 Courses</span>
              </div>
            </div>

            <div className="flex">
              <div data-aos="fade-up" className=" w-6/12 pr-2 pt-3">
                <div className="box relative">
                  <img
                    src={course2}
                    alt="course"
                    className=" relative data-twe-lazy-animation"
                    loading="lazy"
                  />
                  <div className=" bg-white text-black absolute bottom-1 right-1 p-1 flex flex-col justify-center items-center">
                    <h2 className="text-[0.3rem] md:text-[0.8rem] font-smallHeading font-bold lg:text-[1.2rem]">
                      Graphics Design
                    </h2>
                    <span className=" text-sky-400 text-[0.3rem] md:text-[0.6rem] lg:text-[0.9rem]">49 Courses</span>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className=" w-6/12 pl-2 pt-3">
                <div className="box relative">
                  <img
                    src={course3}
                    alt="course"
                    className=" relative data-twe-lazy-animation"
                    loading="lazy"
                  />
                  <div className=" bg-white text-black absolute bottom-1 right-1 p-1 flex flex-col justify-center items-center">
                    <h2 className="text-[0.3rem] md:text-[0.8rem] font-smallHeading font-bold lg:text-[1.2rem]">
                      Video Editing
                    </h2>
                    <span className=" text-sky-400 md:text-[0.6rem] text-[0.3rem] lg:text-[0.8rem]">49 Courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right section  */}
          <div data-aos="fade-up" className=" box w-5/12 pl-2">
            <div className="box relative">
              <img
                src={course4}
                alt="course"
                className=" relative data-twe-lazy-animation"
                loading="lazy"
              />
              <div className=" bg-white text-black absolute bottom-1 right-1 p-1 flex flex-col justify-center items-center">
                <h2 className="text-[0.6rem] md:text-[1rem] font-smallHeading font-bold lg:text-[1.5rem]">
                  Online Marketing
                </h2>
                <span className=" text-sky-400 md:text-[0.8rem] lg:text-[1.4rem] text-[0.5rem]">49 Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Courses  */}
      <div className="w-11/12 md:my-[4rem] mx-auto flex flex-col items-center py-[2rem]">
        {/* Heading  */}
        <h1 data-aos="fade-up" className=" flex gap-4 items-center text-[1rem] md:text-[1.5rem] lg:text-[2rem]">
          <span className="flex flex-col gap-2 items-end ">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
          Popular Courses
          <span className="flex flex-col gap-2">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
        </h1>

        {/* courses  */}
        <div className=" my-[2rem] gap-4 flex w-full mx-auto justify-center">
          {/* card 1  */}
          <div data-aos="fade-up"
            className=" text-black
          w-3/12 bg-sky-200 flex flex-col items-center text-center"
          >
            <div className="box">
              <img
                src={cardCourse1}
                alt="cardCourse"
                className=" relative data-twe-lazy-animation"
                loading="lazy"
              />
            </div>
            <h1 className=" text-[0.9rem] md:text-[1.3rem] font-smallHeading text-center lg:text-[1.7rem]">
              $ 149.00
            </h1>
            <span className=" text-[0.6rem] md:text-[1rem] font-smallHeading text-center lg:text-[1.4rem]">(123)</span>
            <h2 className=" font-bold text-[0.8rem] md:text-[1rem] font-smallHeading text-center lg:text-[1.4rem]">
              Web Design & Development Courses for Beginners
            </h2>
          </div>
          {/* card 2  */}
          <div data-aos="fade-up"
            className=" text-black
          w-3/12 bg-sky-200 flex flex-col items-center text-center"
          >
            <div className="box">
              <img
                src={cardCourse2}
                alt="cardCourse"
                className=" relative data-twe-lazy-animation"
                loading="lazy"
              />
            </div>
            <h1 className=" md:text-[1.3rem] text-[0.9rem] font-smallHeading text-center lg:text-[1.7rem]">
              $ 149.00
            </h1>
            <span className="  md:text-[1rem] text-[0.6rem] font-smallHeading text-center lg:text-[1.4rem]">(123)</span>
            <h2 className=" text-[0.8rem] font-smallHeading text-center  md:text-[1rem] lg:text-[1.4rem] font-bold">Cloud Computing & Web Development Courses</h2>
          </div>
          {/* card 3 */}
          <div data-aos="fade-up"
            className=" text-black
          w-3/12 bg-sky-200 flex flex-col items-center text-center"
          >
            <div className="box">
              <img
                src={cardCourse3}
                alt="cardCourse"
                className=" relative data-twe-lazy-animation"
                loading="lazy"
              />
            </div>
            <h1 className=" md:text-[1.3rem] text-[0.9rem] font-smallHeading text-center lg:text-[1.7rem]">
              $ 149.00
            </h1>
            <span className=" md:text-[1rem] text-[0.6rem] font-smallHeading text-center lg:text-[1.4rem]">(123)</span>
            <h2 className=" text-[0.8rem] font-smallHeading text-center  md:text-[1rem] lg:text-[1.4rem] font-bold">
              Data Science & Data Engineering with AI / ML
            </h2>
          </div>
        </div>
      </div>

      {/* Instructors  */}
      <div className="w-11/12 md:my-[4rem] mx-auto flex flex-col items-center py-[2rem]">
        {/* Heading  */}
        <h1 data-aos="fade-up" className=" mt-[2rem] flex gap-4 items-center md:text-[1.5rem] text-[1rem] lg:text-[2rem]">
          <span className="flex flex-col gap-2 items-end ">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
          INSTRUCTORS
          <span className="flex flex-col gap-2">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
        </h1>

        <h1 className=" text-[1rem] md:text-[2rem] lg:text-[2.5rem] font-smallHeading my-[2rem]">
          Expert Instructors
        </h1>
        <div className=" w-full flex gap-4 justify-center">
          {/* item-1  */}
          <div data-aos="fade-up"
            className=" text-black
          w-2/12 bg-sky-200 flex flex-col  items-center text-center"
          >
            <div className="box relative">
              <img
                src={team1}
                alt="cardCourse"
                className=" relative data-twe-lazy-animation"
                loading="lazy"
              />
              <div className=" absolute flex bottom-0 bg-sky-200 right-[50%] gap-2 p-1 -translate-x-[-50%] ">
                <span>
                  <FaFacebookSquare className=" text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
                <span>
                  <FaInstagramSquare className=" text-[0.6rem] md:text-[1rem]  lg:text-[1.5rem]" />
                </span>
                <span>
                  <FaTwitterSquare className=" text-[0.6rem] md:text-[1rem]  lg:text-[1.5rem]" />
                </span>
              </div>
            </div>

            <h1 className=" text-[0.6rem] md:text-[1rem] lg:text-[1.5rem] font-bold font-smallHeading">
              Harsh Mewara
            </h1>
            <p className=" text-[0.5rem] md:text-[0.8rem] lg:text-[1.2rem] font-bold font-smallHeading">Web Developer</p>
          </div>
          {/* item-2  */}
          <div data-aos="fade-up"
            className=" text-black
          w-2/12 bg-sky-200 flex flex-col items-center text-center"
          >
            <div className="box relative">
              <img
                src={team2}
                alt="cardCourse"
                className=" relative data-twe-lazy-animation"
                loading="lazy"
              />
              <div className=" absolute flex bottom-0 bg-sky-200 right-[50%] gap-2 p-1 -translate-x-[-50%] ">
                <span>
                  <FaFacebookSquare className="  text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
                <span>
                  <FaInstagramSquare className=" text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
                <span>
                  <FaTwitterSquare className="  text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
              </div>
            </div>

            <h1 className=" md:text-[1rem] text-[0.6rem] font-bold font-smallHeading lg:text-[1.5rem]">
              Marru Sharma
            </h1>
            <p className=" md:text-[0.8rem] text-[0.6rem] font-bold font-smallHeading lg:text-[1.2rem]">Graphics Designer</p>
          </div>
          {/* item-3  */}
          <div data-aos="fade-up"
            className=" text-black
          w-2/12 bg-sky-200 flex flex-col items-center text-center"
          >
            <div className="box relative">
              <img
                src={team3}
                alt="cardCourse"
                className=" relative data-twe-lazy-animation"
                loading="lazy"
              />
              <div className=" absolute flex bottom-0 bg-sky-200 right-[50%] gap-2 p-1 -translate-x-[-50%] ">
                <span>
                  <FaFacebookSquare className="  text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
                <span>
                  <FaInstagramSquare className="  text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
                <span>
                  <FaTwitterSquare className="  text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
              </div>
            </div>

            <h1 className=" md:text-[1rem] text-[0.6rem] font-bold font-smallHeading lg:text-[1.5rem]">
              Frank Ling
            </h1>
            <p className=" md:text-[0.8rem] text-[0.6rem] font-bold font-smallHeading lg:text-[1.2rem]">Data Analyst</p>
          </div>
          {/* item-4  */}
          <div data-aos="fade-up"
            className=" text-black
          w-2/12 bg-sky-200 flex flex-col items-center text-center"
          >
            <div className="box relative">
              <img
                src={team4}
                alt="cardCourse"
                className=" relative data-twe-lazy-animation"
                loading="lazy"
              />
              <div className=" absolute flex bottom-0 bg-sky-200 right-[50%] gap-2 p-1 -translate-x-[-50%] ">
                <span>
                  <FaFacebookSquare className=" text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
                <span>
                  <FaInstagramSquare className="  text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
                <span>
                  <FaTwitterSquare className="  text-[0.6rem] md:text-[1rem] lg:text-[1.5rem]" />
                </span>
              </div>
            </div>

            <h1 className=" md:text-[1rem] text-[0.6rem] font-bold font-smallHeading lg:text-[1.5rem]">
              Jackleen Malik
            </h1>
            <p className=" md:text-[0.8rem] text-[0.6rem] font-bold font-smallHeading lg:text-[1.2rem]">Business Developer</p>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="w-full bg-black h-auto py-[2rem]">
        <div className="w-11/12 flex mx-auto justify-between">
          {/* section-1  */}
          <div className="w-2/12">
            <h1 className=" text-[0.6rem] md:text-[1.2rem] lg:text-[1.5rem]  font-bold font-smallHeading">Quick Link</h1>
            <ul className="flex flex-col gap-1 text-[0.4rem] md:text-[0.8rem] lg:text-[1.2rem]">
              <li className=" hover:text-sky-300">
                <Link to="/">Home</Link>
              </li>
              <li className=" hover:text-sky-300">
                <Link to="/about">About</Link>
              </li>
              <li className=" hover:text-sky-300">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* section-2  */}
          <div className="w-2/12">
            <h1 className=" text-[0.6rem] font-bold font-smallHeading md:text-[1.2rem] lg:text-[1.5rem]">Contact</h1>
            <ul className="flex flex-col gap-1 text-[0.4rem] md:text-[0.8rem] lg:text-[1.2rem]">
              <li className=" hover:text-sky-300">
                <a href="https://www.google.com/maps/place/International+Extrusion+Corporation/@32.4288646,-96.8538777,16z/data=!4m15!1m8!3m7!1s0x864070360b823249:0x16eb1c8f1808de3c!2sTexas,+USA!3b1!8m2!3d31.9685988!4d-99.9018131!16zL20vMDdiX2w!3m5!1s0x864eeebcb96018a9:0x3f5489a986bda38d!8m2!3d32.4311079!4d-96.8509721!16s%2Fg%2F1vvyyhgw?entry=ttu">
                  h-5 Texas Street, New York, USA
                </a>
              </li>
              <li className=" hover:text-sky-300">
                <a href="tel:+9384724927">+012 2343254</a>
              </li>
              <li className=" hover:text-sky-300">
                <a href="mailto:studyNotion247@gmail.com">
                  studyNotion247@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* section-3  */}
          <div className="w-2/12">
            <h1 className=" text-[0.6rem] font-bold font-smallHeading md:text-[1.2rem] lg:text-[1.5rem]">Gallery</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              <img src={course2} alt="" width={"68px"} />
              <img src={course3} alt="" width={"68px"} />
              <img src={course2} alt="" width={"68px"} />
              <img src={course3} alt="" width={"68px"} />
              <img src={course2} alt="" width={"68px"} />
              <img src={course3} alt="" width={"68px"} />
            </div>
          </div>
          {/* section-4  */}
          <div className="w-2/12">
            <h1 className=" text-[0.6rem] font-bold font-smallHeading md:text-[1.2rem] lg:text-[1.5rem]">NewsLetters</h1>
            <p className=" md:text-[0.8rem] text-[0.6rem] lg:text-[1.2rem] font-bold font-smallHeading">This is a news letter web site</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
