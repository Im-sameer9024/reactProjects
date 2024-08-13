/* eslint-disable react/prop-types */
import { createContext,  useEffect,  useState } from "react";
import axios from "axios";



export const StoreContext = createContext(null);
 

const StoreContextProvider = ({ children }) => {

    const [cartItems,setCartItems]= useState([])
    const[food_list,setFood_list] = useState([])
   
    const url = 'http://localhost:3000'

    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=> ({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=> product._id === item)
                totalAmount +=itemInfo.price * cartItems[item]
            }
       
        }
        return totalAmount
    }
    
    const fetchFoodList = async() =>{
        const response = await axios.get(url+"/api/food/list");
        console.log(response.data)
        setFood_list(response.data.data)
    }

    useEffect(()=>{
    fetchFoodList()
    },[])
    


const contextValue ={
food_list,cartItems,setCartItems,addToCart,removeFromCart,getTotalCartAmount
}

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export default StoreContextProvider;