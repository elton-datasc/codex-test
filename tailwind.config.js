/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bce2ff',
          300: '#8ed1ff',
          400: '#59b6ff',
          500: '#2f96ff',
          600: '#1a79f4',
          700: '#1561df',
          800: '#1750b4',
          900: '#1a458d'
        }
      },
      boxShadow: {
        soft: '0 14px 42px -20px rgba(23, 80, 180, 0.35)'
      }
    }
  },
  plugins: []
};
