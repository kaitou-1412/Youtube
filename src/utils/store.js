import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/appSlice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
  },
});

export default store;
