/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d0d0d',
        paper: '#f7f5f1',
        pink: {
          DEFAULT: '#f4b6c2',
          soft: '#f7d9e0',
        },
      },
    },
  },
  plugins: [],
};
