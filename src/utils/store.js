import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/appSlice";
import searchSliceReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
    search: searchSliceReducer,
  },
});

export default store;
