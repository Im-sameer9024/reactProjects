/* eslint-disable no-case-declarations */
import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../Context/ShopContext";
import { toast } from 'react-toastify'
import axios from 'axios'

export default function PlaceOrder() {

  const [method, setMethod] = useState('cod');


  const { navigate, token, cartItems, setCartItems, getCartAmount, deliver_fee, products } = useContext(ShopContext)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  })

  const onChangeHandler = (e) => {

    const { name, value } = e.target

    setFormData( (prev) =>( { ...prev, [name]: value }))

  }

  const onsubmitHandler = async (e) => {

    e.preventDefault()
    try {
      let orderItems = []

      for (let items in cartItems) {
        for (let item in cartItems[items]) {
          if (cartItems[items][item] > 0) {

            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            )

            if (itemInfo) {
              itemInfo.size = item.size,
                itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }

          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliver_fee
      }

      switch (method) {

        case 'cod':
          const response = await axios.post("/api/order/place", orderData, { headers: { token } })

          if (response) {
            setCartItems({})
            navigate("/orders")
          } else {
            toast.error('Failed to place order')
          }

          break;

        default:
          break;

      }

    } catch (error) {
      console.log(error)

    }

  }



  return (
    <form onSubmit={onsubmitHandler} className=" flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">

      {/*----------- Left side  -------------*/}
      <div className=" flex flex-col gap-4 w-full sm:max-w-[480px]">

        <div className=" text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />

        </div>
        <div className=" flex gap-3">

          <input type="text" placeholder="First Name" onChange={onChangeHandler} name="firstName" value={formData.firstName} className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " />

          <input type="text" placeholder="Last Name" onChange={onChangeHandler} name="lastName" value={formData.lastName} className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " />

        </div>

        <input type="email" onChange={onChangeHandler} value={formData.email} name="email" placeholder="Email address" className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " />

        <input type="text" name="street" onChange={onChangeHandler} value={formData.street} placeholder="Street" className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " />

        <div className=" flex gap-3">

          <input type="text" name="city" onChange={onChangeHandler} value={formData.city} placeholder="City" className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " />

          <input type="text" name="state" onChange={onChangeHandler} value={formData.state} placeholder="State" className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " />

        </div>

        <div className=" flex gap-3">

          <input type="number" name="zipCode" onChange={onChangeHandler} value={formData.zipCode} placeholder="Zip Code" className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " />

          <input type="text" name="country" onChange={onChangeHandler} value={formData.country} placeholder="Country" className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " />

        </div>
        <input type="number" name="phone" onChange={onChangeHandler} value={formData.phone} placeholder="Phone" className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " />



      </div>



      {/*------------------ Right side ------------ */}

      <div className=" mt-8">

        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className=" mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* Payment Method selection  */}
          <div className=" flex gap-3 flex-col lg:flex-row">

            {/*-------------- Stripe Logo ----------- */}
            <div onClick={() => setMethod('stripe')} className=" flex items-center gap-3 border p-2 px-3 cursor-pointer">

              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''} `}></p>
              <img src={assets.stripe_logo} alt="logo" className=" h-5 mx-4" />

            </div>

            {/*------------------ RazorPay Logo -------------------- */}
            <div onClick={() => setMethod('razorpay')} className=" flex items-center gap-3 border p-2 px-3 cursor-pointer">

              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''} `}></p>
              <img src={assets.razorpay_logo} alt="logo" className=" h-5 mx-4" />

            </div>

            {/*------------------ Cash on Delivery ------------- */}

            <div onClick={() => setMethod('cod')} className=" flex items-center gap-3 border p-2 px-3 cursor-pointer">

              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className=" text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>

            </div>

          </div>
          <div className="w-full text-end mt-8 ">

            <button onClick={() => navigate('/orders')} className=" bg-black text-white px-16 py-3 text-sm font-smallHeading">PLACE ORDER</button>

          </div>
        </div>

      </div>
    </form>
  )
}
