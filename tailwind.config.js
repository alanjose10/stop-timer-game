/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-sherif'],
      'handjet': ['Handjet', 'cursive'],
    },
    extend: {
      animation: {
        flash: 'flash 1s infinite',
        'slide-in-from-top': 'slide-in-from-top 0.35s ease-out',
      }
    },
  },
  plugins: [],
}

