import { useCallback, useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext";
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Login() {

  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  const onSubmitHandler = useCallback(async (event) => {

    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post("/api/user/register", { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          toast.success("User registered successfully")
          localStorage.setItem("token", response.data.token)
        } else {
          toast.error(response.data.message)
          console.log("jbj")
        }

      } else {

        const response = await axios.post("/api/user/login", { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          toast.success("User logged in successfully")
          localStorage.setItem("token", response.data.token)
        } else {
          toast.error(response.data.message)
        }

      }
    } catch (error) {
      console.log(error.message)
      toast.error("user already registered")
    }

  }, [email, name, password, currentState, setToken]);

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [navigate,token])


  return (
    <form onSubmit={onSubmitHandler} className=" flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 ">
      <div className=" inline-flex items-center gap-2 mb-2 mt-10">
        <p className=" font-heading text-3xl">{currentState}</p>
        <hr className=" border-none h-[1.5px] bg-gray-800 w-8 " />

      </div>

      {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className=" w-full px-3 py-2 border border-gray-800 " placeholder="Name" required />}

      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className=" w-full px-3 py-2 border border-gray-800 " placeholder="Email" required />

      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className=" w-full px-3 py-2 border border-gray-800 " placeholder="Password" required />

      <div className=" w-full flex justify-between text-sm mt-[-8px]">
        <p className=" cursor-pointer">Forgot your Password</p>
        {
          currentState === 'Login' ?

            <p onClick={() => setCurrentState('Sign Up')} className=" cursor-pointer ">Create Account</p>
            :
            <p onClick={() => setCurrentState('Login')} className=" cursor-pointer ">Login Here</p>
        }

      </div>

      <button className=" bg-black text-white font-light px-8 py-2 mt-2" >{currentState === 'Login' ? 'Log In' : 'Sign Up'}</button>

    </form>
  )
}
