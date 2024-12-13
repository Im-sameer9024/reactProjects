/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {

  const currency = '₹';
  const delivery_fee = 10;
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([])
  const [token, setToken] = useState('')

  const navigate = useNavigate()


  const addToCart = async (itemId, size) => {

    if (!size) {
      toast.error('Select Product Size');
      return;
    }

    let cartData = { ...cartItems };

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (!cartData[itemId][size]) {
      cartData[itemId][size] = 0;
    }

    cartData[itemId][size] += 1;

    setCartItems(cartData)
    toast.success(`Item Added ${size} size`)

    if (token) {
      try {
        const response = await axios.post("/api/cart/add", { itemId, size }, { headers: { token } })

        if (!response.data.success) {
          toast.error('Failed to add item to cart');
        }

      } catch (error) {
        console.log(error)
        toast.error('Failed to add item to cart')
      }
    }

  }



  const getCartCount = () => {
    let totalCount = 0

    for (let items in cartItems) {
      for (let item in cartItems[items]) {

        try {

          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item]
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    return totalCount;
  }

  const updateQuantity = async (itemId, size, quantity) => {

    let cartData = { ...cartItems };

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if (token) {
      try {
        const response =  await axios.post("/api/cart/update", { itemId, size, quantity }, { headers: { token } })

        if(!response.data.success) {
          toast.error('Failed to update item quantity');
        }

      } catch (error) {
        console.log(error)
        toast.error('Failed to update item quantity')
      }
    }

  }

  const getUserCart = useCallback(
    async () => {
      try {
        const response = await axios.post("/api/cart/get", {}, { headers: { token } })

        if (response.data.success) {
          setCartItems(response.data.cartData)
        }else{
          toast.error('Failed to fetch cart data')
        }

      } catch (error) {
        console.log(error)
        toast.error('Failed to fetch cart data')

      }
    }, [token])

  const getCartAmount = () => {
    let totalAmount = 0;

    for (let items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);

      for (let item in cartItems[items]) {

        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item]
          }

        } catch (error) {
          console.log(error)
        }

      }

    }
    return totalAmount;
  }

  const getProductsData = async () => {
    try {

      const response = await axios.get("/api/product/list")

      if (response.data.success) {
        setProducts(response.data.products)
      } else {
        toast.error('Failed to fetch products')
        return;
      }

    } catch (error) {
      console.log(error)
      toast.error('Network issues')
    }

  }

  useEffect(() => {
    getProductsData()
  }, [])

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      getUserCart()
    }
  }, [token, getUserCart])

  const value = {
    products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart,
    getCartCount, updateQuantity, getCartAmount, navigate, token, setToken

  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )


}

export default ShopContextProvider;
