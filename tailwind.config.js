/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        libre: ['Libre Libre Bodoni', 'serif'],
        harley: ['Harley Script', 'cursive']
      },
      colors: {
        primary: '#37c7ea',
        dark: '#181818',
        light: '#ffffff'
      }
    }
  },
  plugins: []
};
