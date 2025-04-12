import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  searchTerm: "",
  cart: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value = action.payload;
    },
    setSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(item => item._id === action.payload._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(item => item._id === action.payload._id);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1; // Decrease quantity
        } else {
          state.cart = state.cart.filter(item => item._id !== action.payload._id);
        }
      }
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload._id);
    },
    clearCart: (state) => {
      state.cart = [];
    }
  },
})

export const { addProduct, setSearch, addToCart, decreaseQuantity, removeItemFromCart, clearCart } = productSlice.actions;

export default productSlice.reducer