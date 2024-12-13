/* eslint-disable react/prop-types */
import { useCallback, useState } from "react"
import { assets } from "../assets/assets"
import { toast } from "react-toastify"
import axios from "axios"
import FadeLoader from "react-spinners/FadeLoader"

const Add = ({ token }) => {

  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [image4, setImage4] = useState(null)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("67");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const [loading, setLoading] = useState(false);


  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setLoading(true);

      try {

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("subCategory", subCategory);
        formData.append("bestseller", bestseller);
        formData.append("sizes", JSON.stringify(sizes));

        image1 && formData.append("image1", image1);
        image2 && formData.append("image2", image2);
        image3 && formData.append("image3", image3);
        image4 && formData.append("image4", image4);

        const response = await axios.post('/api/product/add', formData, { headers: { token } })
        console.log(token)

        if (response.data.success) {
          toast.success("Product added successfully")
          setName("");
          setDescription("");
          setPrice("");
          setCategory("");
          setSubCategory("");
          setBestseller(false);
          setSizes([]);
          setImage1(null);
          setImage2(null);
          setImage3(null);
          setImage4(null);
        } else {
          toast.error(response.data.message)
        }

      } catch (error) {
        toast.error(error)

      } finally {
        setLoading(false);
      }

    }, [name, description, price, category, subCategory, bestseller, sizes, image1, image2, image3, image4, token])





  return (

    <>

      {/*------------ Spinner ---------- */}
      {
        loading && (

          <span className=" absolute left-[50%] top-[50%]" >
            <FadeLoader color={"#000"} loading={loading} size={50}  />
          </span>


        )
      }

      <form onSubmit={handleSubmit} className={`flex flex-col w-full items-start gap-3 font-smallHeading ${loading ? "opacity-50 " : "opacity-100"} transition-all duration-300`}>


        <div>
          <p className=" mb-2">Upload Image</p>

          <div className=" flex gap-2">
            <label htmlFor="image1">
              <img className=" w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="upload image" />

              <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>

            <label htmlFor="image2">
              <img className=" w-20" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="upload image" />

              <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>

            <label htmlFor="image3">
              <img className=" w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="upload image" />
              <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>

            <label htmlFor="image4">
              <img className=" w-20" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="upload image" />
              <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>

          </div>
        </div>

        {/*----------- Name -------- */}

        <div className=" w-full">

          <p className=" mb-2">Product Name</p>

          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Type Here" required className=" w-full px-3 py-2 max-w-[500px]" />

        </div>

        {/*----------- Description -------- */}

        <div className=" w-full">

          <p className=" mb-2">Product Description</p>

          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write Content Here" required className=" w-full px-3 py-2 max-w-[500px]"></textarea>
        </div>

        <div className=" flex flex-col sm:flex-row gap-2 w-full sm:gap-8 ">

          {/*----------- Category -------- */}


          <div>
            <p className=" mb-2">Product Category</p>
            <select onChange={(e) => setCategory(e.target.value)} className=" w-full px-3 py-2 ">
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/*----------- Sub Category -------- */}


          <div>
            <p className=" mb-2">Sub Category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} className=" w-full px-3 py-2 ">
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          {/*----------- Price -------- */}

          <div>
            <p className=" mb-2">Product Price</p>
            <input value={price} onChange={(e) => setPrice(e.target.value)} className=" w-full px-3 py-2 sm:w-[120px]" type="number" placeholder="25" />
          </div>
        </div>


        {/*----------- Sizes -------- */}

        <div>
          <p className=" mb-2">Product Sizes</p>

          <div className=" flex gap-3">
            <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== 'S') : [...prev, 'S'])}>

              <p className={` px-3 py-1 cursor-pointer ${sizes.includes("S") ? 'bg-pink-300' : "bg-slate-300"}  `}>S</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== 'M') : [...prev, 'M'])}>
              <p className={` px-3 py-1 cursor-pointer ${sizes.includes("M") ? 'bg-pink-300' : "bg-slate-300"}  `}>M</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== 'L') : [...prev, 'L'])}>
              <p className={` px-3 py-1 cursor-pointer ${sizes.includes("L") ? 'bg-pink-300' : "bg-slate-300"}  `}>L</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== 'XL') : [...prev, 'XL'])}>

              <p className={` px-3 py-1 cursor-pointer ${sizes.includes("XL") ? 'bg-pink-300' : "bg-slate-300"}  `}>XL</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== 'XXL') : [...prev, 'XXL'])}>

              <p className={` px-3 py-1 cursor-pointer ${sizes.includes("XXL") ? ' bg-pink-300' : "bg-slate-300"}  `}>XXL</p>
            </div>
          </div>

        </div>

        <div className=" flex gap-2 mt-2">
          <input checked={bestseller} onChange={() => setBestseller(prev => !prev)} type="checkbox" id="bestseller" />
          <label className=" cursor-pointer" htmlFor="bestseller">Add to Best Seller</label>

        </div>

        <button type="submit" className=" w-28 py-3 mt-4 bg-black text-white">
          ADD
        </button>


      </form>

    </>

  )
}

export default Add
