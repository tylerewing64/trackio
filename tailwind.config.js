/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: { 
        'main-color': '#232222',
        'main-color-hover': '#2B2B2C',
        'light-green': '#9DFF94',
        'dark-green': '#1DB954',
        'secondary-color': '#EDEDED',
        'third-color': ' bg-secondary-color'
      }, 
    
    },
    screens : { 
      'phone': '350px'
    }
  },
  plugins: [],
}

