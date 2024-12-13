import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import { assets } from "../assets/assets";

const useHomePage = () => {

  const { products, currency } = useContext(ShopContext)



  const [latestProducts, setLatestProducts] = useState([])
  const [bestSeller, setBestSeller] = useState([]);


  // lastestCollection component 
  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [products])


  // BestSeller component 
  useEffect(() => {
    const bestProduct = products.filter((item) => {
      return item.bestseller
    })

    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  // Newsletter component 
  const onSubmitHandler = (e) => {
    e.preventDefault()

  }

  return {
    latestProducts, currency, bestSeller,assets,onSubmitHandler

  }
}

export default useHomePage
