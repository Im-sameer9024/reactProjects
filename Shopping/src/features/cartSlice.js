import { createSlice } from "@reduxjs/toolkit";

const initialState = {
cart:[],
totalQuantity:0,
totalPrice:0, 
count:0
}

export const cartSlice =  createSlice({

    name:"allCart",
    initialState,
    reducers:{
      addToCart : (state,action) =>{
        state.cart.push(action.payload)
      },
      inc:(state) => {
        state.count+=1;
      },
      dec:(state) =>{
        state.count-=1;
      }
    }

})

export default cartSlice.reducer;
export const{addToCart,inc,dec}=cartSlice.actions;