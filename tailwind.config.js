/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:[ "Yrsa", 'serif']
      },
      colors:{
        textc: '#2c8cd0',
        bodybg: '#ecf0f1',
        boldtext:'#092f6b'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

