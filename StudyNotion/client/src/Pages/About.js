
import { motion } from "framer-motion";
import about from "../assets/img/about.jpg";
import {  useState } from "react";
import student1 from "../assets/img/testimonial-1.jpg";
import student2 from "../assets/img/testimonial-2.jpg";
import student3 from "../assets/img/testimonial-3.jpg";
import student4 from "../assets/img/testimonial-4.jpg";
import { Link } from "react-router-dom";
import course2 from "../assets/img/cat-2.jpg";
import course3 from "../assets/img/cat-3.jpg";



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
const About = () => {
  const slides = [
    {
      id: 1,
      name: "Akansha Nama",
      profession: "Web Developer",
      image: student1,
      review:
        "I am Web Developer by profession in a MNC company. This is the best Platform to learning and good relationships.",
    },
    {
      id: 1,
      name: "Jork Sighania",
      profession: "DevOps Engineer",
      image: student2,
      review:
        "Moreover, the community aspect is fantastic. I've had the opportunity to connect with like-minded professionals, participate in discussions, and collaborate on projects, which has been invaluable for my professional growth.",
    },
    {
      id: 1,
      name: "Sky jostan",
      profession: "Cloud Engineer",
      image: student3,
      review:
        "The interactive learning environment, with quizzes and hands-on projects, has significantly enhanced my learning experience. The ability to track my progress and receive personalized recommendations has kept me motivated and on track with my goals.",
    },
    {
      id: 1,
      name: "katrina Melon",
      profession: "AI/ML Engineer",
      image: student4,
      review:
        "Overall, this platform is the best for learning and building professional relationships. Highly recommended for anyone looking to upskill or stay updated with the latest industry trends.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className='  w-[100vw] h-auto flex flex-col justify-center  bg-slate-400  "
      '
      id="darkBlue"
    >
      {/* About Us  */}
      <div className=" w-11/12 flex flex-col mx-auto my-[3rem] items-center">
        <div data-aos="fade-up" className="w-9/12 mx-auto flex justify-center">
          <img src={about} alt="about" />
        </div>
        <div className="w-10/12 mx-auto mt-[2rem]">
        <h1 data-aos="fade-up" className=" flex gap-4 justify-center items-center text-[1rem] md:text-[1.5rem] lg:text-[2rem] mx-auto">
          <span className="flex flex-col gap-2 items-end ">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
          About Us
          <span className="flex flex-col gap-2">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
        </h1>
        <h1 data-aos="fade-up" className=" text-[1rem] md:text-[2rem] lg:text-[2.5rem] font-smallHeading my-[2rem] text-center">
          Welcome To StudyNotion
        </h1>
          <p data-aos="fade-up" className="text-center font-content text-[1rem] mt-4">
            StudyNotion is a learning platform designed to offer a wide range of
            educational resources and tools to learners of all ages and
            backgrounds. The platform aims to make education accessible,
            engaging, and effective by leveraging modern technologies and
            instructional methodologies. StudyNotion is a comprehensive learning
            platform that combines quality education with modern technology to
            create an effective and enjoyable learning experience. Whether you
            are looking to gain new skills, advance your career, or pursue a
            hobby, StudyNotion offers the resources and support to help you
            achieve your learning objectives.
          </p>
          <div className="flex mx:flex flex-col justify-center items-center mt-4 mx-auto">
            <ul className=" text-[1rem]  text-sky-300 flex flex-col gap-3 ">
              <li data-aos="fade-up">
                <span>
                  <i className="fa-solid fa-arrow-right text-sky-300 mr-2"></i>
                </span>
                Skilled Instructors
              </li>
              <li data-aos="fade-up">
                <span>
                  <i className="fa-solid fa-arrow-right text-sky-300 mr-2"></i>
                </span>
                International Certificate
              </li>
              <li data-aos="fade-up">
                <span>
                  <i className="fa-solid fa-arrow-right text-sky-300 mr-2"></i>
                </span>
                Online Classes
              </li>
              <li data-aos="fade-up">
                <span>
                  <i className="fa-solid fa-arrow-right text-sky-300 mr-2"></i>
                </span>
                Certifications and Badges
              </li>
              <li data-aos="fade-up">
                <span>
                  <i className="fa-solid fa-arrow-right text-sky-300 mr-2"></i>
                </span>
                Community and Collaboration
              </li>
              <li data-aos="fade-up">
                <span>
                  <i className="fa-solid fa-arrow-right text-sky-300 mr-2"></i>
                </span>
                Personalized Learning Paths
              </li>
            </ul>
            
            
          </div>
        </div>
      </div>
      {/* Students Reviews  */}
      <h1 data-aos="fade-up" className=" flex gap-4 items-center text-[1rem] md:text-[1.5rem] lg:text-[2rem] mx-auto">
          <span className="flex flex-col gap-2 items-end ">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
          Testimonials
          <span className="flex flex-col gap-2">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
        </h1>
          <h1 className=" text-[1.5rem] font-smallHeading text-center mt-8">
            Our Students Says!
          </h1>
      {/* slider  */}
      <div data-aos="fade-up" className="w-8/12 mx-auto gap-6 flex flex-col items-center my-[1rem] ">
        <div className="w-5/6 mx-auto flex flex-col justify-center  items-center mt-4">
          <div className=" inline-block rounded-full p-3 outline-2 outline-offset-2 outline outline-sky-300">
            <img
              src={slides[currentIndex].image}
              alt="img"
              className=" rounded-full"
            />
          </div>
          <h1 className=" text-[1.3rem] font-bold font-smallHeading text-center">
            {slides[currentIndex].name}
          </h1>
          <p>{slides[currentIndex].profession}</p>
          <div className=" text-center font-content text-[1rem]">
            {slides[currentIndex].review}
          </div>
        </div>
        <div className="space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
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
              <img src={course2} alt="" width={"68px"}/>
              <img  src={course3} alt=""  width={"68px"} />
              <img  src={course2} alt=""  width={"68px"} />
              <img  src={course3} alt=""  width={"68px"} />
              <img src={course2} alt=""  width={"68px"} />
              <img  src={course3} alt=""   width={"68px"}/>
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

export default About;
