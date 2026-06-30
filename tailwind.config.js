/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutal-black': '#0A0A0A',
        'brutal-white': '#FFFFFF',
        'brutal-yellow': '#FFE600',
        'brutal-pink': '#FF3366',
        'brutal-blue': '#0055FF',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #0A0A0A',
        'brutal-lg': '16px 16px 0px 0px #0A0A0A',
        'brutal-sm': '4px 4px 0px 0px #0A0A0A',
      },
    },
  },
  plugins: [],
};
