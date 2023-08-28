/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'purple-light': '#A881E6',
      'purple': '#7450AC',
      'purple-dark': '#523480',

      'gray-100': '#FBF9FE',
      'gray-200': '#AFABB6',
      'gray-300': '#252529',
      'gray-400': '#17171A',
      'gray-500': '#111112',
      'gray-600': '#0C0C0D',

      'sucess-light': '#4E995E',
      'sucess': '#2F723D',

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
