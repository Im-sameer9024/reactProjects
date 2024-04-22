import React from 'react'
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa";

const Card = ({review}) => {
  return (
    <div>
        <div id='Main-section'  className='z-[-10]' >
           <div id='image-section' className=' inline-block'>
              <img src={review.image}  className=' object-cover w-[120px] h-[120px] rounded-full inline-block absolute top-[-3rem] left-3 z-[10] ' alt='hello' />
             
              
              <div className=' bg-violet-600 w-[120px] h-[120px] rounded-full absolute top-[-3rem] left-5 z-[5] '></div>
           </div>
           <div id='content-section ' className='flex flex-col justify-center items-center gap-3  mt-[-40px]'>
               <h2 className='text-[20px] font-bold text-center inline-block'>{review.name}</h2>
               <h4 className=' text-gray-600 text-opacity-40 text-center mt-[-15px] '>{review.job}</h4>
               <span >
                <FaQuoteLeft/>
               </span>
               <p className='text-center px-8'>{review.text}</p>
               <span>
                  <FaQuoteRight/>
               </span>
            </div>
         </div>
    </div>
  )
}

export default Card
