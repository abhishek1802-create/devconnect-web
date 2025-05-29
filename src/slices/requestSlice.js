import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    getRequests: (state, action) => {
      return action.payload;
    },
  },
});

export const { getRequests } = requestSlice.actions;

export default requestSlice.reducer;
