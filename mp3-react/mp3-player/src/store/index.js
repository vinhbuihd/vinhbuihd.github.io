import { configureStore } from "@reduxjs/toolkit";
import isPlayingSlice from "./reducers/isPlaying.slice";
import isRandomSlice from "./reducers/isRandom.slice";
import isRepeatSlice from "./reducers/isRepeat.slice";
import favoriteSongSlice from "./reducers/favoriteSong.slice";

const store = configureStore({
  reducer: {
    isPlaying: isPlayingSlice,
    isRandom: isRandomSlice,
    isRepeat: isRepeatSlice,
    favoriteSong: favoriteSongSlice,
  },
});
export default store;
