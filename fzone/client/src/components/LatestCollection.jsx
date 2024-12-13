import Title from "./Title"
import ProductItem from "./ProductItem"
import useHomePage from "../hooks/useHomePage"

export default function LatestCollection() {

  const{latestProducts,currency} = useHomePage()


  return (
    <div className="my-10 ">

      {/* title  */}
      <div className=" text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className=" w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 font-content ">
          Our latest clothing collection blends timeless elegance with contemporary trends, designed to elevate your everyday wardrobe. Featuring a curated selection of premium fabrics, vibrant hues, and modern silhouettes, each piece is crafted to offer both comfort and style. Whether you’re looking for sophisticated workwear, casual weekend essentials, or standout pieces for special occasions, this collection promises versatility and flair. Embrace fashion that not only looks good but feels great, empowering you to express your individuality with confidence.
        </p>
      </div>

      {/* Rendering products  */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {

          latestProducts.map((item, index) => {
            return (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} currency={currency} />
            )
          })
          
        }
      </div>

    </div>
  )
}
