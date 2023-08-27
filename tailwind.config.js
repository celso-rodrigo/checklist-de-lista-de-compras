/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'pink': '#DB5BBF',
      'orange': '#E07B67',
      'yellow': '#BB9F3A',
      'green': '#8CAD51',
      'blue': '#7B94CB',
      'pink-dark': '#251622',
      'orange-dark': '#261A17',
      'yellow-dark': '#211E12',
      'green-dark': '#1C2015',
      'blue-dark': '#1A1D23'
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
