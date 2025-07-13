/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './App.tsx',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-smooth': 'spin-smooth 2s linear infinite',
        'bounce-gentle': 'bounce-gentle 1.5s infinite',
        'slide-up-fade': 'slide-up-fade 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0)' },
          '50%': { transform: 'translate3d(0, -8px, 0)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            transform: 'translate3d(0, 0, 0) scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
            transform: 'translate3d(0, 0, 0) scale(1.02)'
          },
        },
        'spin-smooth': {
          from: { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          to: { transform: 'translate3d(0, 0, 0) rotate(360deg)' },
        },
        'bounce-gentle': {
          '0%, 100%': { 
            transform: 'translate3d(0, 0, 0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translate3d(0, -10px, 0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        'slide-up-fade': {
          from: {
            opacity: '0',
            transform: 'translate3d(0, 30px, 0)',
          },
          to: {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
} 