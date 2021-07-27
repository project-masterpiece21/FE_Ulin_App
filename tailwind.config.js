/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'tosca-100': '#14d8b2',
      'tosca-200': '#3fe0d0',
      'tosca-300': '#01ced1',

    }),
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        xss: ['10px', {
          letterSpacing: '-0.01em',
        }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
  ],
};
