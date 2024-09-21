import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLatestProducts } from "../redux/fetures/cartSlice.js"
import ProductItem from "./ProductItem.jsx"


export default function LatestCollection() {

  const products = useSelector((state) => state.cart.products)

  const latestProducts = useSelector((state) => state.cart.latestProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLatestProducts(products.slice(0, 10)))
  }, [products, dispatch])



  return (
    <div className=" w-10/12 mx-auto my-[4rem]">
      {/* Heading section  */}
      <div>
        <p className=" flex items-center justify-center text-[2.4rem] font-smallHeading">
          <span>LATEST <b>COLLECTION</b></span>
          <span className="w-10 border-black ml-2 border-[1px] "></span>
        </p>
        <p className=" text-center font-content">Our latest clothing collection blends style and comfort, offering a wide range of timeless pieces for every occasion. From casual wear to elegant outfits, each item is thoughtfully designed with high-quality fabrics and attention to detail. Whether you&#39;re looking for classic staples or trendy new looks, our collection has something to complement every wardrobe. Discover fashion that not only looks great but feels just right!</p>
      </div>

      {/* Latest Products  */}
      <div className=" my-[5rem] grid grid-cols-5 gap-[2rem]">
        {
          latestProducts.map((item, index) => {
            return (
              <ProductItem key={index} id={item._id} price={item.price} name={item.name} image={item.image[0]} />
            )
          })
        }
      </div>
    </div>
  )
}
