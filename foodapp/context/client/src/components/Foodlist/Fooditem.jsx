/* eslint-disable react/prop-types */

import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context-API/StoreContext";

export default function Fooditem({ id, name, price, description, image }) {

    const{cartItems,addToCart,removeFromCart} = useContext(StoreContext)


  return (
    <div className=" w-3/12 flex flex-col rounded-xl shadow-xl overflow-hidden">
      <div>
        <img src={image} alt="food" />
        {cartItems[id] ? (
          
          <div className=" flex justify-center items-center text-center gap-3 mt-3">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        ) : (
          <img
          className=" float-right shadow-xl mt-2 rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        )}
      </div>
      <div className="px-3">
        <p className=" font-smallHeading">{name}</p>
        <img src={assets.rating_starts} alt="rating" />
      </div>
      <div className="px-3 py-2 font-content">
        <p>{description}</p>
        <p className="text-[1.5rem] text-orange-500">${price}</p>
      </div>
    </div>
  );
}
