import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { setVisible } from "../redux/fetures/cartSlice";
import { useDispatch } from "react-redux";

export default function Footer() {

  const dispatch = useDispatch()

  return (
    <div className="w-full bg-slate-100 py-3 my-[4rem]">
      <div className=" w-10/12 mx-auto flex justify-between ">

      {/* sectin-1  */}
        <div className=" w-5/12">
          <img src={assets.logo} alt="" className=" w-[60px]" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab ipsam necessitatibus aspernatur, voluptatum eaque magni voluptates consequuntur voluptas non sequi iure quisquam, eveniet sit quaerat. Laudantium adipisci molestiae eius!
          </p>
        </div>

       {/* section-2  */}
        <div >
          <p className="mb-4 font-smallHeading text-xl font-bold">COMPANY</p>
          <ul className=' w-full font-smallHeading flex flex-col'>
            <li onClick={() => dispatch(setVisible(false))} className=' hover:font-semibold'>
              <Link to="/" className='pl-4'>
                HOME
              </Link>
            </li>

            {/* Collection  */}
            <li onClick={() => dispatch(setVisible(false))} className=' hover:font-semibold'>
              <Link to="/collection" className='pl-4'>
                COLLECTION
              </Link>
            </li>


            {/* About  */}
            <li onClick={() => dispatch(setVisible(false))} className=' hover:font-semibold'>
              <Link to="/about" className='pl-4'>
                ABOUT
              </Link>
            </li>

            {/* Contact  */}
            <li onClick={() => dispatch(setVisible(false))} className=' hover:font-semibold'>
              <Link to="/contact" className='pl-4'>
                CONTACT
              </Link>
            </li>
          </ul>

        </div>

       {/* section-3  */}
        <div>
          <p className="mb-4 font-smallHeading text-xl font-bold">GET IN TOUCH</p>
          <ul>
            <li>+1248768</li>
            <li>contect@fzone.com</li>
          </ul>
        </div>


      </div>
      <hr className=" border border-black my-4" />
      <p className=" text-center font-smallHeading">Copyright 2024@ F-zone.com -All Right Reserved</p>
    </div>
  )
}
