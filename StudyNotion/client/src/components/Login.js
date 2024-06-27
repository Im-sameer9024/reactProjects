import React from 'react'
import Template from './Template'
import loginImg from "../assets/login.png"
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
const Login = ({setIsLoggedIn}) => {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <Template
        title="Welcome Back"
        des1="Build skills for today, tomorrow ,and beyond."
        des2="Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
    />
    </motion.div>

  )
}

export default Login
