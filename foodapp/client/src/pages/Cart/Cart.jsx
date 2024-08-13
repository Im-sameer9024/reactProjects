import { useContext } from "react";
import { StoreContext } from "../../Context-API/StoreContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);


  const navigate = useNavigate()

  return (
    <div className="w-10/12 mx-auto mt-[2rem] ">
      <div>
        <div className="grid grid-cols-6 font-heading">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="border-black mb-2 " />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-6 items-center font-content">
                  <img src={item.image} alt="" className="w-10" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className=" cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className=" my-2 border-black" />
              </div>
            );
          }
        })}
      </div>
      {/* cart Total  */}
      <div className=" mt-5">
      <h1 className=" font-heading text-[2rem]">Cart Total</h1>
        <div className=" flex justify-between">
          <div className="w-4/12">
            <div className=" flex justify-between pr-5">
              <p className=" font-heading text-[1.2rem]">Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className=" my-2 border-black"/>
            <div className=" flex justify-between pr-5">
              <p className=" font-heading text-[1.2rem]">Delivery Fee</p>
              <p>${getTotalCartAmount() === 0? 0:2}</p>
            </div>
            <hr className=" my-2 border-black"/>
            <div className=" flex justify-between pr-5">
              <b className=" font-heading text-[1.2rem]">Total</b>
              <b>${getTotalCartAmount()=== 0 ? 0 : getTotalCartAmount()+2}</b>
            </div>
            <button onClick={()=>navigate("/order")} className=" bg-red-500 px-3 py-2 mt-3 text-white font-heading ">Proces to Checkout</button>
          </div>
          {/* promo code  */}
          <div className=" w-6/12">
            <div>
              <p className=" font-smallHeading">If you have a promo code , Enter it here</p>
              <div className="flex mt-3">
                <input type="text" placeholder="promo code" className="border bg-slate-400 bg-opacity-20 outline-none border-black py-1 px-2 " />
                <button className=" bg-black text-white font-heading px-2">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
