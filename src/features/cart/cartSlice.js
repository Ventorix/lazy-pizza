import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
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
