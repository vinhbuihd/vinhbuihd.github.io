import { createSlice } from "@reduxjs/toolkit";

const isRepeatSlice = createSlice({
  name: "isRepeat",
  initialState: false,
  reducers: {
    changeRepeat: (state) => !state,
  },
});

export const { changeRepeat } = isRepeatSlice.actions;
export default isRepeatSlice.reducer;
