import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
    isLoggedIn: false,
    accessToken: null,
    darkTheme: false,
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
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  login,
  logout,
  toggleDarkTheme,
} = appSlice.actions;

export default appSlice.reducer;
