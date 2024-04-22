import React from 'react'
import frame from '../assets/frame.png'
import Signupform from '../Pages/Signupform'
import Loginform from '../Pages/Loginform'
import Google from "../assets/pngwing.com.png"



const Template = ({title,des1,des2,image,formtype,setIsLoggedIn}) => {
    console.log(formtype)
  return (
    <div className='w-11/12 h-[100vh] mx-auto flex pt-8 justify-evenly items-center'>
         <div className='Left-Side w-4/12 flex flex-col gap-4'>
               <h1 className=' text-[30px] leading-9 tracking-tight'>{title}</h1>
               <p className=' flex flex-col text-[1rem]'>
                 <span className=' opacity-60'>{des1}</span>
                 <span className=' text-sky-400 italic'>{des2}</span>
               </p>
               {
                formtype === "signup" ? (<Signupform setIsLoggedIn={setIsLoggedIn}/>):(<Loginform setIsLoggedIn={setIsLoggedIn}/>)
               }
               <div className=' flex justify-center items-center gap-2'>
                  <div className='bg-gray-800 w-full h-[1px] '></div>
                  <span className='text-gray-800 font-bold'>OR</span>
                  <div className='bg-gray-800 w-full h-[1px] '></div>
               </div>
               <button className='  bg-transparent border-gray-800 border py-2 rounded-md flex justify-center items-center gap-1 '>
                 <img src={Google} alt="google" className='w-6' /> <p>Sign Up With Google</p>
               </button>
         </div>
         <div className='Right-Side w-4/12 relative' >
            <img src={frame} alt="Pattern" width={558} height={504}  loading='lazy'/>
            <img src={image} alt="Student" width={558} height={504}  loading='lazy' className=' absolute top-[-15px] right-4'/>
         </div>
    </div>
  )
}

export default Template
