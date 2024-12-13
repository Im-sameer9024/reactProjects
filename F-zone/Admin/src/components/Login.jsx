/* eslint-disable react/prop-types */
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = ({ setToken }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)


  const onsubmitHandler = async (e) => {
    try {
      e.preventDefault()
      console.log("lkskfla")
      const response = await axios.post("/api/user/admin",{ email, password })
      console.log("second")
      if (response.data.success) {
        setToken(response.data.token)
        toast.success("Welcome to Admin Panel")

      } else {
       
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div className=" flex justify-center items-center min-h-screen w-full">

      <div className=" bg-white shadow-md rounded-lg px-8 py-6 max-w-md min-w-[30%] ">
        <h1 className=" font-heading text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onsubmitHandler} className=" font-smallHeading">

          <div className=" mb-3 min-w-72">
            <p className=" text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className=" rounded-md w-full px-3 py-2 border border-gray-300 outline-none " type="email" placeholder="your@email.com" required />
          </div>

          <div className=" mb-3 min-w-72 relative">
            <p className=" text-sm font-medium text-gray-700 mb-2">Enter Your Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className=" rounded-md w-full px-3 py-2 border border-gray-300 outline-none " type={visible ? "text" : "password"} placeholder="Password" required />

            <span onClick={() => setVisible(!visible)} className=" absolute top-10 right-3 text-[1.2rem] "> {visible ? <FaEyeSlash /> : <FaEye/> }</span>

          </div>

          <button type='submit' className=" mt-2 w-full py-2 px-4 rounded-md text-white bg-black hover:bg-slate-300  hover:text-black transition-all duration-300 "> Login </button>
        </form>

      </div>

    </div>
  )
}

export default Login
