/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2F4454',
        secondary: '#2E151B',
        accent: '#DA7B93',
        teal: '#376E65',
        dark: '#1C3334',
      },
    },
  },
  plugins: [],
}