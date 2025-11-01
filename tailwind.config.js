/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'off-white': '#f3f3f3',
        'off-white-muted': '#d7d8da',
        'light-gray': '#e4e4e4',
        gray: '#afb2b7',
        black: '#262526',
        'black-muted': '#7f8084',
      },
      fontFamily: {
        pinyon: ['"Pinyon Script"', 'cursive'],
        sourceSerif: ['"Source Serif 4"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        '60ch': '60ch',
        '75ch': '75ch',
      },
    },
  },
  plugins: [],
};
