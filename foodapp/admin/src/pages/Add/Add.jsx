import { useState } from "react"
import { assets } from "../../assets/assets"
import axios from "axios"
import { toast } from "react-toastify"
const Add = () => {

  const [image, setImage] = useState(false)
  const url = "http://localhost:3000"

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: 0,
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setData(data => ({ ...data, [name]: value }));
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append('image', image)
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', Number(data.price))
    formData.append('category', data.category)
    console.log(formData)

    const response = await axios.post(`${url}/api/v1/add`, formData)
    console.log(response)
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "Salad",
        price: "",
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }


  return (
    <div className=" w-full my-[3rem] mx-[3rem]">
      <form className=" w-8/12 flex flex-col gap-4">
        <div className=" flex flex-col w-2/12">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className=" flex flex-col">
          <p>Product Name</p>
          <input onChange={(event) => onChangeHandler(event)} value={data.name} type="text" name="name" placeholder="Type here" className=" border border-black px-2 py-1" />
        </div>
        <div className=" flex flex-col">
          <p>Product Description</p>
          <textarea onChange={(event) => onChangeHandler(event)} value={data.description} name="description" rows="6" placeholder="Write content here" required className=" border border-black px-2 py-1"></textarea>
        </div>
        <div>
          <div className=" flex flex-col">
            <p>Product category</p>
            <select onChange={(event) => onChangeHandler(event)} name="category" className=" border border-black px-2 py-1">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <div className=" flex flex-col">
              <p>Product Price</p>
              <input onChange={(event) => onChangeHandler(event)} value={data.price} type="number" name="price" placeholder="$20" className=" border border-black px-2 py-1" />
            </div>
          </div>
        </div>
        <button onClick={(event) => submitHandler(event)} className=" bg-red-500 px-3 py-2 mt-3 text-white font-heading ">ADD</button>
      </form>
    </div>
  )
}

export default Add
