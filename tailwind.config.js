/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'mainColor': '#4B6043',
      'tBlack': '#1F1F29',
      'lightColor': '#89939E',
      'tWhite': '#fff',
      'lightGreen': '#8EB380',
      'white': '#FAF9F6',
      'dark': '#262636',
      'navDark': '#191921',
      'light': '#F5F5F5',
      'darkFooter': '#2E2E2E',
    },
  },
  plugins: [],
};