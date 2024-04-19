import React from "react";
import Testimonial from "./components/Testimonial";
import data from './data.json'

const App = () => {

   

  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-slate-300">
         <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[2rem] font-bold ">Our Testimonial</h1>
            <div className=" w-[8rem] h-1 bg-violet-600 "></div>
         </div>
         
         <div className="mt-5">
            <Testimonial reviews={data}/>
         </div>
    </div>
  )
  
};

export default App;
