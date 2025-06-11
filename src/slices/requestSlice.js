import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    getRequests: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      return state.filter((request) => request._id !== action.payload);
    },
  },
});

export const { getRequests, removeRequest } = requestSlice.actions;

export default requestSlice.reducer;
