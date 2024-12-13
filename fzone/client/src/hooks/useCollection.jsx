import { useContext, useState } from "react"

import { ShopContext } from '../Context/ShopContext'


const useCollection = () => {

  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(true)

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent')


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))

    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }


  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }


  // filter based on Category  and SubCategory
  const applyFilter = useCallback(() => {

    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)

  }, [category, products, search, showSearch, subCategory])


  // sort products according to price 
  const sortProduct = useCallback(() => {

    let fpCopy = [...filterProducts]

    switch (sortType) {

      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
        break;

      default:
        break;
    }

  }, [sortType, filterProducts])

  useEffect(() => {
    sortProduct()
  }, [sortProduct])


  useEffect(() => {
    applyFilter()
  }, [category, subCategory, applyFilter, products])

  // useEffect(() => {
  //   setFilterProducts(products)
  // }, [products])


  return {

    products,
    showFilter,
    setShowFilter, search, showSearch,

  }
}

export default useCollection
