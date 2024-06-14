import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state , action) => {
      const product = state.products.find( item => item.id === action.payload.id)
      !product && state.products.push(action.payload)
    },
    remouvCart: (state , action) => {
      state.products = state.products.filter(item => item.id !== action.payload.id)
    },
    remouvAll: (state) => {
      state.products = [];
    },
  },
},
)

export const { addToCart, remouvCart, remouvAll} = cartSlice.actions
export default cartSlice.reducer