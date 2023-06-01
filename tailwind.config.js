/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#151515',
        light: '#fff',
        gray: '#737373',
        sec: '#D1A054',
      }
    },
  },
  plugins: [require("daisyui")],
}

