import useHomePage from "../hooks/useHomePage"

export default function Newsletter() {

const{onSubmitHandler} = useHomePage()


  return (
    <div className=" text-center ">
      <p className=" text-2xl text-gray-800 font-medium font-heading pb-4">Subscribe now & get 20% off</p>
      <p className=" text-gray-400 mt-3 font-content">
        Stay ahead in the world of fashion by subscribing to <b className=" text-black">F-ZONE</b>! Get exclusive access to the latest trends, new arrivals, and special offers straight to your inbox. Whether you’re looking for stylish outfits or timeless classics, we’ve got something for everyone. Be the first to know about our upcoming sales and seasonal collections, and enjoy fashion tips tailored just for you. <b className=" text-black">Don’t miss out—subscribe</b> today and elevate your wardrobe with <b>F-ZONE</b>!
      </p>
      <form onSubmit={onSubmitHandler} className=" w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 border  " >
        <input type="email" placeholder="Enter Your Email" className=" w-full sm:flex-1 outline-none" />
        <button type="submit" className=" bg-black text-white text-xs px-10 py-4">Subscribe</button>
      </form>
    </div>
  )
}
