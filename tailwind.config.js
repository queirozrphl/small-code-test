/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se que esta linha cobre seus arquivos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 