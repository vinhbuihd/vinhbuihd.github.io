import { createSlice } from "@reduxjs/toolkit";
import todoApi from "../../services/todo.service";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      todoApi.endpoints.getAllTodos.matchFulfilled,
      (state, action) => action.payload
    );
  },
});

export default todoSlice.reducer;
