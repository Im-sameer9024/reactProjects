
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Loginform = ({setIsLoggedIn}) => {

    const[formData,setFormData]=useState({
     email:"",password:""
    })
    const[showPassword,setShowPassword]=useState(false)

    const navigate = useNavigate()

    function changeHandler(event){
        const {name,value}=event.target
 setFormData((prevData) => ({
    ...prevData,
    [name]:value
 }))
    }

    function submitHandler(event){
       event.preventDefault();
       setIsLoggedIn(true);
       toast.success("Logged In");
       navigate("/dashboard")
     
       fetch("http://localhost:3000/api/v1/login",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(formData)
       })
       .then((res)=>{console.log(res)})
       .catch(err => console.log(err))
    }
  return (
    <form onSubmit={submitHandler} className=' font-smallHeading flex flex-col gap-3'>
         <label htmlFor="email" className=' flex flex-col gap-1'>
            <p>
                Email Address<sup className='text-red-500'>*</sup>
            </p>
            <input type="email" required name='email' id='email' value={formData.email} onChange={changeHandler} placeholder='Enter email Id'  className=' outline-none bg-slate-800 w-full px-3 pl-2 py-2 rounded-md '/>
         </label>

         <label htmlFor="password" className=' flex flex-col gap-1 relative'>
            <p>
                Password<sup className='text-red-500'>*</sup>
            </p>
            <input type={showPassword ? "text" : "password"} required name='password' id='password' value={formData.password} onChange={changeHandler} placeholder='Password' className=' outline-none bg-slate-800 w-full px-3 pl-2 py-2 rounded-md '/>
            <span onClick={()=> setShowPassword((prev)=> !prev)} className=' absolute right-2 text-[20px] bottom-8 ' >
                {
                    showPassword ? (<IoIosEyeOff/>):(<IoIosEye/>)
                }
            </span>
            <Link className=' justify-end flex text-[13px] text-sky-500 '>
                <p>Forgot Password</p>
            </Link>
         </label>
         <button className=' font-smallHeading bg-yellow-500 py-2 text-black rounded-md font-bold'>
            Sign In
         </button>
    </form>
  )
}

export default Loginform;
