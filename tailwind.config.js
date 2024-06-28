/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'back-blue' : '#181f30',
        'hoverblue' : '#f0f3fa'
      },
      backgroundImage: {
        'back-content' : "url('/src/assets/background.png')",
      }

    },
  },
  plugins: [],
}

