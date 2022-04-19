import { createApi } from "@reduxjs/toolkit/dist/query";
import baseQuery from "./base.service";

const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "todos",
    }),

    createTodo: builder.mutation({
      query: ({ title }) => {
        return {
          url: "todos",
          method: "POST",
          body: { title, userId: 1, completed: false },
        };
      },
    }),

    completeTodo: builder.mutation({
      query: ({ id }) => {
        return {
          url: `todos/${id}`,
          method: "PUT",
        };
      },
    }),
  }),
});

export default todoApi;

export const {
  useGetAllProductsQuery,
  useCreateTodoMutation,
  useCompleteTodoMutation,
} = todoApi;
