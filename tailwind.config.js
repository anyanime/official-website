/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#f8fafc',
      'bh-lime': '#f0abfc',
      'bh-btn-dark': '#a855f7',
      'bh-btn': '#c084fc',
      'dark-blue': '#1e40af',
      'black': '#334155',
      'bh-teal': '#2dd4bf',
      'bh-gold': '#fff7ed',
      'pearl': '#f8fafc'
    },
    fontFamily: {

    },
    extend: {},
  },
  plugins: [],
}

