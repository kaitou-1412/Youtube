import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
    isLoggedIn: false,
    accessToken: null,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    login: (state, actions) => {
      state.accessToken = actions.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.accessToken = null;
      state.isLoggedIn = false;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar, login, logout } =
  appSlice.actions;

export default appSlice.reducer;
