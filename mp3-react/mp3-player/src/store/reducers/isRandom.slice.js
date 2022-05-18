import { createSlice } from "@reduxjs/toolkit";

const isRandomSlice = createSlice({
  name: "isRandom",
  initialState: false,
  reducers: {
    changeRandom: (state) => !state,
  },
});

export const { changeRandom } = isRandomSlice.actions;
export default isRandomSlice.reducer;
