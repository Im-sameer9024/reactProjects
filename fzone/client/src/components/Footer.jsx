import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Footer() {


  const scrollToPrivacy = () => {

    const element = document.getElementById("ourPolicy")
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }

  }

  return (
    <div className=" w-10/12 mx-auto">
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-20" />
          <p className="font-content w-full md:w-2/3 text-gray-600 ">
            At F-ZONE, we are passionate about providing high-quality, stylish clothing that reflects the latest trends while ensuring comfort and durability. Our mission is to make fashion accessible to everyone, offering a diverse range of apparel for every occasion. Whether you&#39;re looking for modern, chic pieces or timeless classics, F-ZONE has something to fit your unique style. With a commitment to excellence and customer satisfaction, we strive to deliver the best in fashion and service. Explore our collection and discover the perfect outfit to elevate your wardrobe at F-ZONE!
          </p>
        </div>
        <div className=" text-xl font-medium mb-5">
          <p>COMPANY</p>
          <ul className=" flex flex-col gap-1 text-gray-600 font-smallHeading text-sm mt-5">
            <Link to="/" className=" hover:text-black hover:text-bold">HOME</Link>
            <Link to="/about" className=" hover:text-black hover:text-bold">ABOUT</Link>
            <Link to="#" className=" hover:text-black hover:text-bold">DELIVERY</Link>
            <Link to="#" onClick={scrollToPrivacy} className=" hover:text-black hover:text-bold">PRIVACY POLICY</Link>
          </ul>
        </div>

        <div>
          <p className=" text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>
              <a href="tel:+1-212-456-789">
                +1-212-456-789
              </a>
            </li>
            <li>
              <a href="mailto:contactfzone@gmail.com">
                contactfzone@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className=" py-5 text-sm text-center">Copyright 2024@ F-ZONE.COM -<b>All Right Reserved</b> </p>
      </div>
    </div>
  )
}
