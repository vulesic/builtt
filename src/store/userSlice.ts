import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductIC, UserState } from "../lib/interfaces";

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
  cart: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      console.log('state.user :>> ', state.user);
      localStorage.setItem('userData', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.cart = [];
    },
    addToCart: (state, action: PayloadAction<ProductIC>) => {
      const { id, quantity: newQuantity } = action.payload;
      const existingProductIndex = state.cart.findIndex((product) => product.id === id);

      if (existingProductIndex !== -1) {
        state.cart = state.cart.map((product, index) =>
          index === existingProductIndex ? { ...product, quantity: product.quantity + newQuantity } : product
        );
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    updateProductQuantity: (state, action: PayloadAction<ProductIC>) => {
      const { id, quantity: newQuantity } = action.payload;
      const existingProductIndex = state.cart.findIndex((product) => product.id === id);

      if (existingProductIndex !== -1) {
        state.cart = state.cart.map((product, index) =>
          index === existingProductIndex ? { ...product, quantity: newQuantity } : product
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductIC>) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((product) => product.id !== id);
    },
  },
});

export const { loginSuccess, logout, addToCart, updateProductQuantity, removeFromCart } = userSlice.actions;
export default userSlice.reducer;
