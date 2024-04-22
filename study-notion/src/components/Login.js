import React from 'react'
import Template from './Template'
import loginImg from "../assets/login.png"


const Login = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Welcome Back"
        des1="Build skills for today, tomorrow ,and beyond."
        des2="Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
    />

  )
}

export default Login
