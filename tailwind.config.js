const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors: {
        primary: '#E46A33',
        secondary: '#201E1E',
        ice : '#bce1ff',
        white: '#fff',
        black: colors.black,
        gray: colors.gray,
        indigo: colors.indigo
      }
    },
    plugins: [],
  }