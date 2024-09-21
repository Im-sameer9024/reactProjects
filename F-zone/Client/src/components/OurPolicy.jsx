import { assets } from "../assets/assets";

export default function OurPolicy() {
  return (
    <div className=" w-10/12 flex justify-evenly mx-auto my-[6rem]">

      <div className=" flex flex-col  justify-center items-center">
        <img src={assets.exchange_icon} alt="icon" className="" />
        <p className="font-heading ">Easy Exchange Policy</p>
        <p className="font-content text-gray-400 text-[1.2rem]">We offer free exchange policy</p>
      </div>

      <div className=" flex flex-col  justify-center items-center">
        <img src={assets.quality_icon} alt="icon" className="" />
        <p className="font-heading ">7 days return Policy</p>
        <p className="font-content text-gray-400 text-[1.2rem]">We provide 7 days free return  policy</p>
      </div>

      <div className=" flex flex-col  justify-center items-center">
        <img src={assets.support_img} alt="icon" className="" />
        <p className="font-heading ">Best customer support</p>
        <p className="font-content text-gray-400 text-[1.2rem]">We provide 24/7 customer supports</p>
      </div>
    </div>
  )
}
