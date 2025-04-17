import React from 'react'
import {  categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const{navigate} = useAppContext()

  return (
    <div className=' mt-16'>
      <p className=' text-2xl md:text-3xl font-medium'>Categories</p>
      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>

        {/* single category  */}
        {
            categories.map((category, index) =>{
                return (
                  <div key={index} className=" group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
                  style={{backgroundColor:category.bgColor}}
                  onClick={()=>{
                    navigate(`/products/${category.path.toLowerCase()}`);
                    scrollTo({top: 0, left:0, behavior: 'smooth'});
                  }}
                  >
                    <img
                      src={category.image}
                      alt={category.text}
                      className=" group-hover:scale-105 transition-all max-w-28"
                    />
                    <p className=" text-sm font-medium">{category.text}</p>
                  </div>
                );
            })
        }

       
      </div>
    </div>
  )
}

export default Categories
