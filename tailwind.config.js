/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkModeBlack: "#181818",
        darkModeDarkGray: "#212121",
        darkModeGray: "#3D3D3D",
        darkModeLightGray: "#AAAAAA",
      },
    },
  },
  plugins: [],
};
