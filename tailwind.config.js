/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#09090B',
        'accent-cyan': '#06B6D4',
        'accent-purple': '#8B5CF6',
        'text-primary': '#FAFAFA',
        'text-secondary': '#A1A1AA',
        'glass-fill': 'rgba(25, 25, 30, 0.4)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'glass-hover': 'rgba(255, 255, 255, 0.15)',
        'success-emerald': '#10B981'
      },
      borderRadius: {
        'glass-md': '12px',
        'glass-xl': '24px',
        'glass-2xl': '32px'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
