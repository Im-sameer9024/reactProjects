import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Signup from "./components/Signup";
import Dashboard from "./Pages/Dashboard";
import Login from "./components/Login";
import { AnimatePresence } from "framer-motion";
import Aos from "aos";
import Readmore from "./Pages/Readmore";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] pb-[5rem] text-white" id="darkBlue">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route  exact path="/" element={<Home />} />
          <Route path="/readmore" element={<Readmore/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
