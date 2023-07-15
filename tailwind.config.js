/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1d4ed8',
      'white': '#fafafa',
      'dark-blue': '#1e40af',
      'black': '#171717'
    },
    fontFamily: {

    },
    extend: {},
  },
  plugins: [],
}

