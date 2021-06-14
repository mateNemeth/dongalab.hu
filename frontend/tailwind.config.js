module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cream: {
          light: "#fcebd1",
          dark: "#ce800c",
          hero: "#f90"
        },
      },
      fontFamily: {
        "annie": ["Annie Use Your Telescope", "cursive"]
      },
      boxShadow: {
        "articleList-sm": "0 0 1rem #ffd494",
        "articleList-lg": "0 0 2rem #ffd494",
        "article-img": "0 0 15px rgb(0 0 0 / 70%)"
      },
      maxWidth: {
        "article-img": "400px"
      },
      transitionProperty: {
         'height': 'height',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
