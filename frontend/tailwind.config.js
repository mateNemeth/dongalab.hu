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
        }
      },
      fontFamily: {
        "annie": ["Annie Use Your Telescope", "cursive"]
      },
      fontSize: {
        '5xl': ['4rem', {
          letterSpacing: '0.15em',
          lineHeight: 'unset'
        }],
        '7xl': ['8rem', {          
          letterSpacing: '0.15em',
          lineHeight: 'unset'
        }]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
