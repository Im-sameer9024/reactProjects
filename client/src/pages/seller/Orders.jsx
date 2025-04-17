import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import { assets, dummyOrders } from '../../assets/assets';

const Orders = () => {

  const{currency} = useAppContext()

  const[orders,setOrders] = useState([])

  const fetchOrders  = async() =>{
    setOrders(dummyOrders)
  }

  useEffect(()=>{
    fetchOrders()
  },[])


  return (
    <div className=" no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:items-center md:flex-row gap-5 p-5 max-w-4xl justify-between  rounded-md border border-gray-300"
          >
            <div className="flex gap-5 max-w-80">
              <img
                className="w-12 h-12 object-cover "
                src={assets.box_icon}
                alt="boxIcon"
              />
              <div >
                {order.items.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="font-medium flex gap-1">
                      {item.product.name}{" "}
                      <span className={`text-btn}`}>x {item.quantity}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm md:text-base text-black/60">
              <p className=" text-black/80">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city},{" "}
                {order.address.state},{order.address.zipcode},{" "}
                {order.address.country}
              </p>
            </div>

            <p>{}</p>
            <p>{order.address.phone}</p>

            <p className="font-medium text-lg my-auto text-black/70">
              {currency}{order.amount}
            </p>

            <div className="flex flex-col text-sm md:text-base text-black/60">
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
