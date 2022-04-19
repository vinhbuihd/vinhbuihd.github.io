import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base.service";

const productApi = createApi({
  reducerPath: "products",
  baseQuery,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

const getProductById = createApi({
  reducerPath: "getProductById",
  baseQuery,
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export { productApi, getProductById };
export const { useGetAllProductsQuery } = productApi;
export const { useGetProductByIdQuery } = getProductById;
