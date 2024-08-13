import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className=' w-[100vw] my-2'>
      <div className=' w-10/12 mx-auto flex justify-between'>
        <img src={assets.logo} alt="" />
        <img src={assets.profile_image} alt="" width="56px" />
      </div>
    </div>
  )
}

export default Navbar
