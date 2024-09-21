import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../assets/assets'

const initialState = {
  visible: false,
  currency:"$",
  products,
  fee:10,
  latestProducts:[],
  bestSeller:[],
  email:"",

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    setVisible: (state, action) => {
      state.visible = action.payload
    },

    setLatestProducts:(state,action) => {
      state.latestProducts = action.payload
    },

    setBestSeller:(state,action) =>{
      state.bestSeller = action.payload
    },

    updateField:(state,action) =>{
      const{value} = action.payload
      state.email = value
    },

    resetForm: (state) => {
      state.email = ""

    }

  },
})

// Action creators are generated for each case reducer function
export const { setVisible,setLatestProducts,setBestSeller,updateField,resetForm } = cartSlice.actions

export default cartSlice.reducer