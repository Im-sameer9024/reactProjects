import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import course2 from "../assets/img/cat-2.jpg";
import course3 from "../assets/img/cat-3.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Button } from "@mui/material";

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
  stiffness: 30,
  damping: 10,
};

const Contact = () => {
  const position = [40.7127753, -74.0059728];
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="  w-[100vw] h-auto flex flex-col items-center"
      id="darkBlue"
    >
      {/* Heading  */}
      <h1 data-aos="fade-left" className=" flex mt-[4rem] gap-4 justify-center items-center text-[1rem] md:text-[1.5rem] lg:text-[2rem] mx-auto">
          <span className="flex flex-col gap-2 items-end ">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
          Contact Us 
          <span className="flex flex-col gap-2">
            <hr className=" w-[3rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            <hr className=" w-[5rem] h-[0.2rem] bg-sky-400 rounded-lg" />
          </span>
        </h1>
          <h1 data-aos="fade-left" className=" text-[1rem] md:text-[2rem] lg:text-[2.5rem] font-smallHeading my-[2rem] text-center">
            Contact For Any Enquires
          </h1>
      {/* Contact Section  */}
      <div className="w-11/12 flex flex-col md:flex-row md:flex   mx-auto md:mx-0 mt-[3rem] gap-[2rem] md:justify-between">
        <div data-aos="fade-left" className="w-full md:w-4/12 md:m-0 mx-auto">
          <h1 className=" text-center text-[1.3rem] font-bold font-smallHeading">
            Get In Touch
          </h1>
          <p className=" text-center font-content text-[1rem]">
            We'd love to hear from you! Whether you have questions, feedback, or
            simply want to connect, feel free to reach out. Our team is here to
            assist you and ensure you have the best experience possible. Contact
            us today and let's start a conversation!
          </p>
          <ul className="mt-4 space-y-3 mx-auto">
            <li className="flex item-center gap-3">
              <div className="bg-sky-300 w-[3rem] h-[3rem] flex justify-center items-center text-black text-[1.4rem]">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h1 className=" font-bold font-smallHeading text-[1rem] md:text-[1.5rem] lg:text-[1.5rem]">
                  Office
                </h1>
                <a
                  className="hover:text-sky-300"
                  href="https://www.google.com/maps/place/International+Extrusion+Corporation/@32.4288646,-96.8538777,16z/data=!4m15!1m8!3m7!1s0x864070360b823249:0x16eb1c8f1808de3c!2sTexas,+USA!3b1!8m2!3d31.9685988!4d-99.9018131!16zL20vMDdiX2w!3m5!1s0x864eeebcb96018a9:0x3f5489a986bda38d!8m2!3d32.4311079!4d-96.8509721!16s%2Fg%2F1vvyyhgw?entry=ttu"
                >
                  h-5 Texas Street, New York, USA
                </a>
              </div>
            </li>
            <li className="flex item-center gap-3">
              <div className="bg-sky-300 w-[3rem] h-[3rem] flex justify-center items-center text-black text-[1.4rem]">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h1 className=" text-[1.3rem] font-bold font-smallHeading">
                  Mobile
                </h1>
                <a href="tel:+9384724927" className="hover:text-sky-300">
                  +012 2343254
                </a>
              </div>
            </li>
            <li className="flex item-center gap-3">
              <div className="bg-sky-300 w-[3rem] h-[3rem] flex justify-center items-center text-black text-[1.4rem]">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h1 className=" text-[1.3rem] font-bold font-smallHeading">
                  Email
                </h1>
                <a
                  href="mailto:studyNotion247@gmail.com"
                  className="hover:text-sky-300"
                >
                  studyNotion247@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* Map  */}
        <div data-aos="fade-up" className="w-full md:w-4/12 ">
          <div className="w-full h-[300px]">
            <MapContainer center={position} zoom={13} className="h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        {/* form Section  */}
        <div data-aos="fade-right" className="w-full md:w-4/12 box-border gap-3 flex flex-col">
          <form className=" gap-4 flex flex-col">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Name"
                className="p-1 bg-transparent border outline-none w-[100%] "
              />
              <input
                type="text"
                placeholder="Email"
                className="p-1 bg-transparent border outline-none w-[100%]"
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Subject"
                className="p-1 bg-transparent border outline-none w-[100%] "
                rows={2}
              />
              <textarea
                type="text"
                placeholder="Message"
                className="p-1 bg-transparent border outline-none w-[100%] "
                rows={6}
              />
            </div>
            <Button variant="contained">Read More</Button>
          </form>
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

export default Contact;
