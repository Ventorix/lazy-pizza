import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    // updateItem(state, action) {
    //   state.cart = state.cart.map((item) => {
    //     if (item.includes(action.payload.id)) {
    //       item = action.payload.item;
    //     }
    //   });
    // },
    increaceItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.id,
      );

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaceItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.id,
      );

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, updateItem } = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
