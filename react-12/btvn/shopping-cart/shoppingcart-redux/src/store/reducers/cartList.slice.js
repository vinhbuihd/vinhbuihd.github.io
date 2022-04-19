import { createSlice } from "@reduxjs/toolkit";

const cartListSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      // {id:1, quantity: 1}
      let item = state.find((item) => item.id == action.payload);
      if (item) {
        item.quantity++;
      } else {
        console.log(item);
        state.push({ id: action.payload, quantity: 1 });
      }
    },

    removeProduct: (state, action) => {
      const index = state.findIndex((item) => item.id == action.payload);
      state.splice(index, 1);
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id == action.payload);

      item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id == action.payload);
      item.quantity--;
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } =
  cartListSlice.actions;
export default cartListSlice.reducer;
