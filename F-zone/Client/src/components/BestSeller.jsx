import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBestSeller } from "../redux/fetures/cartSlice"
import ProductItem from "./ProductItem"

export default function BestSeller() {

  const products = useSelector((state) => state.cart.products)

  const bestSeller = useSelector((state) => state.cart.bestSeller)

  const dispatch = useDispatch()

  useEffect(() => {
    const bestProducts = products.filter((item) => (item.bestseller));
    dispatch(setBestSeller(bestProducts.slice(0,5)))

  }, [products, dispatch])

  return (
    <div className=" w-10/12 mx-auto my-[4rem]">

      <div>
        <p className=" flex items-center justify-center text-[2.4rem] font-smallHeading">
          <span>BEST <b>SELLER</b></span>
          <span className="w-10 border-black ml-2 border-[1px] "></span>
        </p>
        <p className=" text-center font-content">Discover our best-selling clothing pieces, loved for their exceptional quality, style, and comfort. From timeless wardrobe staples to the latest fashion trends, these top picks are must-haves for every season. Crafted with premium fabrics and designed to elevate your look, our best-sellers combine versatility with on-trend appeal. Shop now and find out why these styles are customer favorites!</p>
      </div>


      <div className=" grid grid-cols-5 my-[3rem] gap-[2rem]">
        {
          bestSeller.map((item,index) =>{
            return (
              <ProductItem key={index} id={item._id} price={item.price} name={item.name} image={item.image[0]}  />
            )
          })
        }
      </div>

    </div>
  )
}
