import React from 'react'
import Card from './Card'

const Tours = ({tours,removeTour}) => {
  return (
    <div className='flex  justify-center items-center flex-wrap gap-3 w-10/12  mt-[1cm]'>
        {
            tours.map((tour) => {
                return <Card key={tour.id} {...tour} removeTour={removeTour} ></Card>
            })
        }
    </div>
  )
}

export default Tours
