
import { IoIosArrowForward } from "react-icons/io";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import useCollection from "../hooks/useCollection";

export default function Collection() {



  const { products, search, showSearch, showFilter, setShowFilter } = useCollection()







  return (
    <div className=" flex flex-col sm:flex-row gap-1 sm:fap-10 pt-10 border-t w-10/12 mx-auto mt-[8rem] ">

      {/* filter options  */}
      <div className=" min-w-60 ">
        <p onClick={() => setShowFilter(!showFilter)} className=" my-2 text-xl text-center flex items-center cursor-pointer gap-2 font-heading">FILTERS
          <span className={` text-center sm:hidden transition-all duration-200    ${showFilter ? " rotate-90 " : ""} `} > <IoIosArrowForward /> </span>

        </p>

        {/* Category box  */}

        <div className={` transition-all duration-800 ease-in-out ${showFilter ? " opacity-1 h-full" : " opacity-0 h-0"}`}>
          {/* Category filter  */}
          <div className={` border border-gray-300 pl-5 mt-6 py-3  sm:block `}>

            <p className=" mb-3 text-sm  font-smallHeading font-semibold">CATEGORIES</p>
            <div className=" flex flex-col text-sm font-light text-gray-700 gap-2 font-content">
              <p className=" flex gap-2">
                <input onChange={toggleCategory} type="checkbox" className="w-3" value={'Men'} />
                MEN
              </p>
              <p className=" flex gap-2">
                <input onChange={toggleCategory} type="checkbox" className="w-3" value={'Women'} />
                WOMEN
              </p>
              <p className=" flex gap-2">
                <input onChange={toggleCategory} type="checkbox" className="w-3" value={'Kids'} />
                KIDS
              </p>
            </div>
          </div>

          {/* SubCategory filter  */}
          <div className={` border border-gray-300 pl-5 mt-6 py-3 my-5 sm:block `}>

            <p className=" mb-3 text-sm  font-smallHeading font-semibold">TYPE</p>
            <div className=" flex flex-col text-sm font-light text-gray-700 gap-2 font-content">
              <p className=" flex gap-2">
                <input type="checkbox" onChange={toggleSubCategory} className="w-3" value={'Topwear'} />
                Topwear
              </p>
              <p className=" flex gap-2">
                <input type="checkbox" onChange={toggleSubCategory} className="w-3" value={'Bottomwear'} />
                Bottomwear
              </p>
              <p className=" flex gap-2">
                <input type="checkbox" onChange={toggleSubCategory} className="w-3" value={'Winterwear'} />
                Winterwear
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Right Side  */}

      <div className=" flex-1">
        <div className=" flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product sort  */}
          <select onChange={(e) => setSortType(e.target.value)} className=" border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/* Map Products  */}

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }

        </div>

      </div>

    </div>
  )
}