import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function Bestseller() {

  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) =>{
      return item.bestseller
    })

    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    <div className="my-10">
      <div className=" text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className=" w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 font-content">
          Good clothes are more than just fabric; they reflect style, comfort, and quality. At <b>F-ZONE</b>, we believe that the best clothing not only looks great but feels even better. Our collection is crafted with care, using premium materials that ensure durability while maintaining a timeless, fashionable appeal. Whether you&#39;re dressing for a special occasion or everyday wear, our pieces are designed to fit perfectly and make you feel confident. Discover clothes that combine elegance, comfort, and quality at <b>F-ZONE</b>, where fashion meets craftsmanship.
        </p>
      </div>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {

          bestSeller.map((item, index) => {
            return (
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            )
          })

        }

      </div>

    </div>
  )
}
