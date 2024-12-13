import useHomePage from "../hooks/useHomePage"

export default function OurPolicy() {

  const{assets} = useHomePage()

  return (
    <div id="ourPolicy" className=" flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">

      <div>
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className=" font-semibold font-heading">Easy Exchange Policy</p>
        <p className=" text-gray-400 font-smallHeading">We offer hassle free exchange policy</p>
      </div>

      <div>
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className=" font-semibold font-heading">7 Days Return Policy</p>
        <p className=" text-gray-400 font-smallHeading">We provides 7 days free return policy</p>
      </div>

      <div>
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className=" font-semibold font-heading">Best customer support</p>
        <p className=" text-gray-400 font-smallHeading">We provide 24/7 customer support</p>
      </div>

    </div>
  )
}
