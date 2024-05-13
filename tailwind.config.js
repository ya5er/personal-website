/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-red-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-orange-200',
    'bg-gray-100',
    'hover:shadow-red-100',
    'hover:shadow-green-100',
    'hover:shadow-blue-100',
    'hover:shadow-orange-200',
    'hover:shadow-gray-100',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

