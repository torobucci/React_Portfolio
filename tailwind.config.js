const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        yellowish: '#fec544',
        body_color: '#0a101e',
        about: 'rgba(21, 27, 41, 0.5)',
        popup:'rgb(10, 16, 30, 0.85) '

      },
      boxShadow: {
        'btn': '0px 5px 10px 0px #fec64450',
      },
      screens: {
        'xsm': '460px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xlg': '1240px',
      },
    },
  },
  plugins: [],
});
