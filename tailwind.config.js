const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#F6C54C',
        light_dark: '#121212',
      },
    },
  },
  plugins: [],
})
