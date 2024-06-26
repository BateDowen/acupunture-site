/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sistemFont': ['Commissioner', 'sans-serif']
      },
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
        },
        'customPing' : {
          'from': {
            opacity: 1,
            transform: 'scale(1)'
          },
          'to': {
            opacity: 0.7,
            transform: 'scale(1.1)'
          } 
        }
      },
     
    animation:{
      'fade-up': 'fade-up 2s ease-in-out ',
      'customPing': 'customPing 1s cubic-bezier(0, 0, 0.2, 1) infinite'
    },
    boxShadow: {
      'customGray': 'rgba(0, 0, 0, 0.2) 0 0 20px'
    },
    colors: {
      'lightBlue' : '#48b6bb',
      'hoverBlue' : '#2A6466',
      'wood' : '#D3B180',
      'black' : '#1f1e1e',
      'darkwood': '#774A41',
      'lightwood': '#eedabf',
      'lightgray' : '#F7F7F7'
    }
    },
  },
  plugins: [],
}