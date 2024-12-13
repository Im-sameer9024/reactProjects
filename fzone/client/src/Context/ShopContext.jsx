/* eslint-disable react/prop-types */
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const currency = '₹';
const delivery_fee = 10;

const value = {
  products,currency,delivery_fee
}


const ShopContextProvider = ({ children }) => {

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider;