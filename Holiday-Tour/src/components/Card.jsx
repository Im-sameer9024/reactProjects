import React, { useState } from 'react'

const Card = ({id,image,name,info,price,removeTour}) => {

     let[readmore,setReadmore]=useState(false)
     

     function changeHandler(){
        setReadmore(!readmore)
     }


    let description = readmore ? info: `${info.substring(0,200)}...`

  return (
    <div className='w-[350px] shadow-lg space-x-3 mx-auto p-4'>
         <div className='w-[300px] mx-auto'>

           <img className='w-[300px] h-[300px] mx-auto ' src={image}/>
           <div className='text-left'>
               <h2 className='text-green-500 font-bold'>{price}</h2>
               <h3 className=' text-[20px] font-bold'>{name}</h3>
               <p>{description}<span  onClick={changeHandler} className='text-green-600 cursor-pointer font-bold text-lg'>{readmore ? "Show Less" :"Read More"}</span></p>
           </div>

           <button className='bg-red-500 mt-1 w-[250px] p-2 text-white font-bold text-[20px] hover:bg-red-700 rounded-md transition-all duration-200 ' onClick={() => removeTour(id)} >Not Interested</button>

         </div>
    </div>
  )
}

export default Card
