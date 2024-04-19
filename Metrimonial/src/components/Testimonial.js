import React, { useState } from 'react'
import Card from './Card'
import { AiFillCaretLeft ,AiFillCaretRight  } from "react-icons/ai";

const Testimonial = ({reviews}) => {

    const[index,setIndex]= useState(0)

    function leftHandler(){

        if(index-1 < 0){
           setIndex(reviews.length - 1)
        }
        else{
            setIndex(index-1)
        }

    }

    function rightHandler(){
        if(index + 1 >= reviews.length ){
        setIndex(0);
        }
        else{
       setIndex(index +1)
        }
    }

    function surpriseHandler(){
    let randomIndex = Math.floor(Math.random()*reviews.length)
    setIndex(randomIndex);
    }
  return (
    <div>
          <div  className=' w-[600px] h-[400px] bg-white shadow-2xl flex flex-col justify-center items-center relative  gap-4'>
              <Card review={reviews[index]} />
              
              <div className='flex gap-4'>
                <button onClick={leftHandler} className='text-[20px] '>
                    <AiFillCaretLeft/>
                </button>
                <button onClick={rightHandler} className='text-[20px] '>
                    <AiFillCaretRight/>
                </button>
              </div>
              <button onClick={surpriseHandler} className=' bg-violet-700 text-white font-bold px-6  py-1 rounded-md'>Surprise Me</button>
          </div>
    </div>
  )
}

export default Testimonial
