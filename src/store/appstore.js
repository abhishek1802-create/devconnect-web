import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import feedSlice from "../slices/feedSlice";
import requestSlice from "../slices/requestSlice.js";
import connectionSlice from "../slices/connectionSlice.js";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
    request: requestSlice,
    connection: connectionSlice,
  },
});

export default appStore;
