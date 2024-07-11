import { assets } from "../../assets/assets";


export default function AppDownload() {
  return (
    <div id="App" className="  py-[1rem] gap-4 mx-auto my-[3rem] justify-center items-center w-7/12 flex flex-col">
      <div className="mx-auto flex flex-col">
        <p className=" text-center font-heading text-[2rem]">For Better Experience Download</p>
        <span className="text-center font-content text-[1.3rem] mx-auto ">Tomoto App</span>
      </div>
      <div className=" flex gap-4">
        <img src={assets.play_store} alt="" className=" hover:scale-105 cursor-pointer transition-all duration-200 " />
        <img src={assets.app_store} alt="" className=" hover:scale-105 cursor-pointer transition-all duration-200 " />
      </div>
    </div>
  )
}
