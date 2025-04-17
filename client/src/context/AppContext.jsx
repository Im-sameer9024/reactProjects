/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );
  const[loginData,setLoginData] = useState(null)
  const [isSeller, setIsSeller] = useState(false);
  const [products, setProducts] = useState([]);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const[searchQuery,setSearchQuery] = useState("")

  // -----------------  Add product to cart

  const addToCart = (itemId) => {
    let cartData = { ...cartItems };
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  // -----------------  Update product from cart
  const updateCartItem = (itemId, quantity) => {
    let cartData = { ...cartItems };
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  //-----------------  Remove product from cart

  const removeFromCart = (itemId) => {
    let cartData = { ...cartItems };
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    setCartItems(cartData);
    toast.success("Removed from Cart");
  };

  //------------- fetch all products-------
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };
// Get cart items count 
  const getCartCount = () =>{
    let totalCount = 0;
    for(let item in cartItems){
      totalCount +=cartItems[item]
    }
    return totalCount
  }

  // Get totalCart amount
  
  const getCartAmount = () =>{
    let totalAmount = 0;
    for(let items in cartItems){
      let itemInfo = products.find((product)=> product._id === items)
      if(cartItems[items]>0){
        totalAmount+=itemInfo.offerPrice * cartItems[items]
      }
    }
    return Math.floor(totalAmount *100)/100;
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    setCartItems,
    showUserLogin,
    setShowUserLogin,
    loginData,
    setLoginData,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
