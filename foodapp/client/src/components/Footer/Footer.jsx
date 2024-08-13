import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <div id="Contact" className="w-full text-white bg-slate-800">
      <div className=" my-[4rem] pt-5 w-10/12 mx-auto justify-between items-start flex">
        {/* left-side-section  */}
      <div className="w-4/12">
      <h1 className=" text-[3rem] font-heading text-red-500">Tomoto.</h1>
        <p className="font-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          in sit cum earum sequi itaque eum amet quibusdam sed debitis? Id
          dolores doloremque expedita a ipsam itaque qui ab cupiditate.
        </p>
        <div className="flex mt-3 gap-2" >
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      {/* center-section  */}
      <div>
        <h1 className=" font-heading text-[2rem]">Company</h1>
        <ul className="font-content gap-4 flex flex-col">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      {/* right-side-section  */}
      <div className="3/12">
        <h1 className=" font-heading text-[2rem]">Get In Touch</h1>
        <ul className="font-content">
            <li>+898765456789</li>
            <li>email</li>
        </ul>
      </div>
      </div>
      <hr className=" w-10/12 mx-auto" />
      <p className="text-center py-2">Copyright 2024</p>
    </div>
  );
}
