/* eslint-disable react/prop-types */
import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify";
import { currency } from "../App";

const List = ({ token }) => {

  const [list, setList] = useState([]);

  const fetchList = useCallback(async () => {

    try {
      const response = await axios.get("/api/product/list")
      if (response.data.success) {
        setList(response.data.products)
      }

    } catch (err) {
      toast.error(err)
    }

  }, [])

  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(`/api/product/remove/${id}`, { headers: { token } })
      
      if (response.data.success) {
        toast.success("Product removed")
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (err) {
      toast.error(err)
    }
  }



  useEffect(() => {
    fetchList()
  }, [fetchList])


  return (
    <>
      <p className=" mb-2">All Products List</p>
      <div className=" flex flex-col gap-2">
        {/*------------------- List table title ---------------- */}

        <div className=" hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className=" text-center">Action</b>
        </div>

        {/*------------------ Procduct List ------------------ */}

        {
          list.map((item, index) => (
            <div className=" grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] item-center gap-2 py-1 px-2 border text-sm" key={index}>
              <img src={item.image[0]} alt="img" className=" w-12" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={() => removeProduct(item._id)} className=" text-right md:text-center cursor-pointer text-lg">X</p>
            </div>
          ))
        }

      </div>

    </>
  )
}

export default List
