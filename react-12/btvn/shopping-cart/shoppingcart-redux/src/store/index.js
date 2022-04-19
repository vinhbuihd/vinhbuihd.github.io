import { configureStore } from "@reduxjs/toolkit";
import { productApi, getProductById } from "../services/product.service";
import cartListSlice from "./reducers/cartList.slice";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [getProductById.reducerPath]: getProductById.reducer,
    cartList: cartListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(getProductById.middleware),
});

export default store;
