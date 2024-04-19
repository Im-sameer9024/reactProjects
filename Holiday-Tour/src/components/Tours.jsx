import React from 'react'
import Card from './Card'

const Tours = ({tours,removeTour}) => {
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-3 mt-[1cm]'>
        {
            tours.map((tour) => {
                return <Card key={tour.id} {...tour} removeTour={removeTour} ></Card>
            })
        }
    </div>
  )
}

export default Tours
