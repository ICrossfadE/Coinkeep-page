module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        mainBG: '#DBEDF3',
        primaryBG: 'rgba(35, 89, 82, 0.85)', 
        primary: '#235952', 
        secondary: 'rgba(35, 89, 82, 0.48)', 
        accent: '#17B978',
        accentHover: '#51cf9c', 
        accentSecondary: '#FF0303',
        darkBG: '#112031'
      },

      transitionDuration: {
        '400': '400ms',
        '800': '800ms',
        '1500': '1500ms',
      }
    },
    plugins: [],
  },
}