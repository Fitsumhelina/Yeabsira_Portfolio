/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      spacing: {
        '200': '200px', 
        '300':'300px',
        '30':'30px'// Add custom margin value
      },
    },
  },
  plugins: [],
}

