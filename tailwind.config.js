module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/background.png')",
      }),
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
