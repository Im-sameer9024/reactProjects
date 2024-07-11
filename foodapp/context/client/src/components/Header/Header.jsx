import { assets } from "../../assets/assets";

export default function Header() {
  return (
    <div className="w-full">
      <div className=" w-10/12 mx-auto relative">
        <img src={assets.header_img} alt="header-img" />
        <div className=" text-white text-content flex flex-col top-8 absolute w-7/12 gap-3 left-3 ">
          <h1 className=" font-heading  text-[1rem]">
            Order your favorite food here
          </h1>
          <p className="font-content hidden">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            expertise, one delicious meal at a time.
          </p>
          <div>
            <button className=" bg-white text-black py-1 px-3 rounded-3xl font-content">View Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
