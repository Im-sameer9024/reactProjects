import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <div className="mx-auto w-10/12 my-[2rem] md:flex md:flex-row border border-gray-400 rounded-md flex-col justify-between">
      {/* Left section  */}
      <div className="md:w-6/12 w-full font-content flex flex-col justify-center items-center">

        <div className=" py-[2rem]">
          <p className=" flex items-center">
            <span className="w-10 border-black mr-2 border-[1px] "></span>
            <span>OUR BESTSELLERS</span>
          </p>

          <p className=" text-[2.4rem]">
            Latest Arrivals
          </p>

          <p className=" flex items-center">
            <span>SHOP NOW</span>
            <span className="w-10 border-black ml-2 border-[1px] "></span>
          </p>
        </div>

      </div>

      {/* Right Section  */}
      <div className="md:w-6/12 w-full">
        <img src={assets.hero_img} alt="heroImage" />
      </div>
    </div>
  )
}
