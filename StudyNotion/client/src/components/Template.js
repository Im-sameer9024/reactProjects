import React from 'react'
import frame from '../assets/frame.png'
import Signupform from '../Pages/Signupform'
import Loginform from '../Pages/Loginform'
import Google from "../assets/pngwing.com.png"



const Template = ({title,des1,des2,image,formtype,setIsLoggedIn}) => {
    
  return (
    <div id='darkBlue' className='w-full h-auto justify-evenly mt-[5rem] mx-auto px-4 items-center sm:flex  '>

    {/* Left Side  */}
         <div className='Left-Side sm:w-6/12 lg:w-4/12  w-full px-4 flex flex-col gap-4'>
               <h1 className=' font-smallHeading text-[30px] leading-9 tracking-tight'>{title}</h1>
               <p className=' flex flex-col text-[1rem]'>
                 <span className=' font-content opacity-60'>{des1}</span>
                 <span className=' font-content text-sky-400 italic'>{des2}</span>
               </p>
               {
                formtype === "signup" ? (<Signupform setIsLoggedIn={setIsLoggedIn}/>):(<Loginform setIsLoggedIn={setIsLoggedIn}/>)
               }
               <div className=' flex justify-center items-center gap-2'>
                  <div className='bg-gray-800 w-full h-[1px] '></div>
                  <span className='text-gray-800 font-bold'>OR</span>
                  <div className='bg-gray-800 w-full h-[1px] '></div>
               </div>
               <button className='  bg-transparent border-gray-800 border py-2 rounded-md flex justify-center items-center gap-1 font-smallHeading '>
                 <img src={Google} alt="google" className='w-6' /> <p>Sign Up With Google</p>
               </button>
         </div>

     {/* Right Side  */}
         <div className='Right-Side w-5/12 relative hidden sm:block' >
            <img src={frame} alt="Pattern" width={558} height={504}  loading='lazy'/>
            <img src={image} alt="Student" width={558} height={504}  loading='lazy' className=' absolute top-[-15px] right-4'/>
         </div>
    </div>
  )
}

export default Template
