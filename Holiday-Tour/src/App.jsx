import React, { useState } from 'react'
import Tours from './components/Tours'
import data from './data'

const App = () => {

  let[tours,setTours]=useState(data)

  function removeTour(id){
      setTours(tours.filter((tour) => tour.id !== id))
  }

  if(tours.length === 0){
  return (
    <div className=' w-[100vw] h-[100vh] flex flex-col justify-center items-center '>
      <h2 className='text-[30px] font-bold'>No Tour Left</h2>
      <button onClick={()=> setTours(data)} className='bg-slate-300  px-[1cm] py-3 hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-xl font-bold' >
        Refresh
      </button>
    </div>
  );
  }

  return (
    <div className='w-[100vw] h-[100vh] mt-5 text-center '>
      <span className='text-[40px] font-bold outline-dashed outline-blue-600 p-3 outline-[5px]'>Holiday Tours With Group</span>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App
