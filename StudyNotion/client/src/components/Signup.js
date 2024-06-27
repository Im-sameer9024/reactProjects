import React from "react";
import Template from "./Template";
import signupImg from "../assets/signup.png";
import { motion } from "framer-motion";
const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw'
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: '100vw'
  }
};
const pageTransition = {
  type: 'spring',
  stiffness: 50,
  damping: 10
};


const Signup = ({ setIsLoggedIn }) => {
  return (
    <motion.div
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
    >
      <Template
        title="Join the millions learning to code with StudyNotion for free"
        des1="Build skills for today, tomorrow, and beyond."
        des2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </motion.div>
  );
};

export default Signup;
