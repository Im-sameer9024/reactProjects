/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor:{
        "darkBlue":"#01011C"
      },
      fontFamily: {
        content: ["EB Garamond", "serif"],
        heading:["Righteous", 'sans-serif'],
        smallHeading:["Philosopher", 'sans-serif'],
        smallContent:["Philosopher", 'sans-serif']
      },
    },
  },
  plugins: [],
}

