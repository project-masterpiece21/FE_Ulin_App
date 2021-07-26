/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '360px',
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
