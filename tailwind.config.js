/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      brown: {
        700: '#715312',
      },
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
