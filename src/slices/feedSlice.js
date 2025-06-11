import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeCardFromFeed: (state, action) => {
      const newFeed = state.filter((x) => x._id !== action.payload);
      return newFeed;
    },
    removeFeed: (state, action) => {
      return null;
    },
  },
});

export const { addFeed, removeFeed, removeCardFromFeed } = feedSlice.actions;

export default feedSlice.reducer;
