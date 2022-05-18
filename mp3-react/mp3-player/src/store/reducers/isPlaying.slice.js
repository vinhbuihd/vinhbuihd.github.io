import { createSlice } from "@reduxjs/toolkit";

const isPlayingSlice = createSlice({
  name: "isPlaying",
  initialState: false,
  reducers: {
    playSong: (state) => (state = true),
    pauseSong: (state) => (state = false),
  },
});

export const { playSong, pauseSong } = isPlayingSlice.actions;
export default isPlayingSlice.reducer;
