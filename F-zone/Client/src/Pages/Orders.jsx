import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import Title from "../components/Title"
import axios from 'axios'

export default function Orders() {

  const { token, currency } = useContext(ShopContext)

  const [orderData, setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (token) {
        return null
      }

      const response = await axios.post("/api/order/userorders", {}, { headers: { token: token } })

      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map(order => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item);
          }
          )
        })
        console.log(allOrdersItem)
      }


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);

  return (
    <div className=" border-t pt-16">

      <div className=" text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />

      </div>

      <div className=" font-smallHeading">
        {
          orderData.map((item, index) => (
            <div key={index} className=" py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className=" flex items-start gap-6 text-sm">

                <img src={item.image[0]} alt="logo" className=" w-16 sm:w-20" />
                <div>
                  <p className=" sm:text-base font-medium">
                    {item.name}</p>
                  <div className=" flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className=" text-lg ">{currency}{item.price}</p>
                    <p>Quantity:{item.quantity}</p>
                    <p>Size:{item.size}</p>

                  </div>
                  <p className=" mt-2">Date: <span className=" text-gray-400 ">{item.date}</span></p>
                </div>

              </div>
              <div className=" md:w-1/2 flex justify-between">
                <div className=" flex items-center gap-2">
                  <p className=" min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className=" text-sm md:text-base">Ready to Ship</p>

                </div>
                <button className=" border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}
