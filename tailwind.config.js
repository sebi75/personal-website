/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        'gray-trans': 'rgba(0,0,0,0.3)',
        'gray-trans-hover': 'rgba(0,0,0,0.4)',
        gray: {
          900: '#202255',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#3b3d3f',
          100: '#f2f3f5',
        },
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(to right, #0e22a6, #6256bf, #988cd6, #cbc4eb, #ffffff);",
      },
      boxShadow: {
        'shadow-1': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        'light-around-shadow': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },
    },
  },
  plugins: [],
};
