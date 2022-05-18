import { createSlice } from "@reduxjs/toolkit";

const favoriteSongSlice = createSlice({
  name: "favoriteSong",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeSong: (state, action) => {
      const indexRemoveSong = state.findIndex(
        (song) => song.id == action.payload
      );
      state.splice(indexRemoveSong, 1);
      return state;
    },
  },
});

export const { addSong, removeSong } = favoriteSongSlice.actions;
export default favoriteSongSlice.reducer;
