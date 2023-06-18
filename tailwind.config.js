/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./client/**/*.{js,jsx,ts,tsx}'],
  theme: {  
    colors: {
      brown: colors.brown,
      blue: colors.blue,
      red: colors.red,
    },
    fontFamily: {
      title: ['Noto Serif JP', 'serif'],
      body: ['Wix Madefor Display', 'sans-serif'],
    },
    extend: {
      letterSpacing: {
        'widest-0.1': '0.1rem',
        'widest-0.5': '0.5rem',
      },
    },
    plugins: [],
  },
}
