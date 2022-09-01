/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#522AA7',
        // lightPrimary: '#2B0A93',
        lightPrimary: '#6435ff',
        darkPrimary: '#200D5C',
        secondary: '#BE2B28',
        bgPrimary: '#121213',
        bgSecondary: '#48443E',
        'text-primary': '#ffffff',
        'text-secondary': 'rgb(217, 217, 217)'
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],

}


// 200D5C