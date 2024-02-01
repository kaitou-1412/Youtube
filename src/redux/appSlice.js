import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
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
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar, toggleDarkTheme } =
  appSlice.actions;

export default appSlice.reducer;
