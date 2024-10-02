import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext"
import { assets } from "../assets/assets"
import RelatedProduct from "../components/RelatedProduct"

export default function Product() {

  const { productId } = useParams()

  const { products, currency, addToCart } = useContext(ShopContext)

  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')


  useEffect(() => {
    async function fetchProductData() {

      products.map((item) => {

        if (item._id === productId) {
          setProductData(item)
          setImage(item.image[0])
          return null;
        }
      })
    }

    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className=" border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

      <div className=" flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/*----------------- product Images---------------  */}

        <div className=" flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className=" flex flex-col overflow-x-auto justify-between sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full">

            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} alt="image" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
            }

          </div>

          <div className=" w-full sm:w-[80%]">
            <img src={image} alt="img" className=" w-full h-auto " />

          </div>

        </div>

        {/*-------------- Product info------------------  */}

        <div className=" flex-1">
          <h1 className=" font-heading font-medium text-2xl mt-2">{productData.name}</h1>
          <div className=" flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className=" pl-2">(122)</p>
          </div>
          <p className=" font-smallHeading mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className=" mt-5 text-gray-500 w-4/5 font-content">{productData.description}</p>
          <div className=" flex flex-col gap-4 my-8 ">
            <p>Select Size</p>
            <div className=" flex gap-2 ">
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} key={index} className={` border py-2 px-4 bg-gray-100 ${item == size ? 'border-orange-500' : ""}`}>{item}</button>
                ))
              }

            </div>

          </div>

          <button onClick={() => addToCart(productData._id,size)} className=" bg-black text-white px-8 py-3 text-sm active:bg-gray-700 font-smallHeading">ADD TO CART</button>
          <hr className=" mt-8 sm:w-4/5" />
          <div className=" text-sm text-gray-500 mt-5 flex flex-col gap-1 font-smallHeading">
            <p>• 100% Original Product.</p>
            <p>• Cash on Delivery is available on this product.</p>
            <p>• Easy return and exchange policy within 7 days.</p>

          </div>
        </div>

      </div>

      {/*---------------- Description & review section  -----------------------*/}
      <div className=" mt-20 ">
        <div className=" flex ">
          <b className=" border px-5 py-3 text-sm font-heading">Description</b>
          <p className=" font-smallHeading border px-5 py-3 text-sm">Reviews (122)</p>

        </div>
        <div className=" flex flex-col gap-4 border p-6 text-sm text-gray-500 ">
          <p className=" font-content">Discover the latest in fashion at our online clothing store. From trendy tops and stylish dresses to comfortable loungewear and essentials, we offer a wide range of apparel for men, women, and kids. Shop now for high-quality fabrics, unique designs, and unbeatable prices, all from the comfort of your home!</p>

          <p className=" font-content">Experience top-tier service with our clothing store. We provide exceptional quality, personalized fashion advice, and fast, reliable delivery. Whether you&#39;re looking for the latest trends or timeless classics, we ensure a seamless shopping experience from start to finish, making your style journey effortless and enjoyable.</p>

        </div>

      </div>

      {/*------------- Display related products ------------ */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className=" opacity-0">

  </div>

}
