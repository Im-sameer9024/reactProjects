/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'



export default function ProductItem({ id, image, name, price }) {
  return (
    <Link to={`/product/${id}`}>
       <div className=' overflow-hidden'>
        <img src={image} alt="" className='hover:scale-110 transition ease-in-out' />
       </div>
       <div>
        <p className=' font-smallHeading'>{name}</p>
        <p className=' font-heading'>${price}</p>
       </div>
    </Link>
  )
}
