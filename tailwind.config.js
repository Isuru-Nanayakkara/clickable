module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        eggshell: {
          light: '#f2efe4',
          DEFAULT: '#f2efe4',
          dark: '#f2efe4',
        },
        bluechalk: {
          light: '#5577A8',
          DEFAULT: '#5577A8',
          dark: '#5577A8',
        }
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}