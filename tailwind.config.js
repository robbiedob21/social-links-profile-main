/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif']
      },
      colors: {
        'green': 'hsl(75, 94%, 57%)',
        'white': 'hsl(0, 0%, 100%)',
        'grey': 
        {
          400: 'hsl(0, 0%, 20%)',
          700: 'hsl(0, 0%, 12%)',
          900: 'hsl(0, 0%, 8%)'
        }
      }
    },
  },
  plugins: [],
}

