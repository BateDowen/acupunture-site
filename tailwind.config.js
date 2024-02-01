/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'fade-up':{
         '0%':{
          opacity: 0,
          transform: {translateY:'30px', scale: 0.9}
         },
         '100%':{
          opacity: 1,
          transform: {translateY:'0px', scale: 1}
         }
        }
      },
    animation:{
      'fade-up': 'fade-up 2s ease-in-out '
    }
    },
  },
  plugins: [],
}