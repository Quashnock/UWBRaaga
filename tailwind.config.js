/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        vuejs: "#00401a",
        forestGreen: "#006E33",
        darkSpringGreen: "#406F52",
        indianRed: "#D36060"
      },
      height: {
        128: "35rem"
      },
      fontFamily: {
        lora: "'Lora' , serif",
        inter: "'Inter', serif",
        merriweather: "'Merriweather', serif",
        dosis: "'Dosis', sans-serif"
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '100%': {transform: 'scaleY(1}'}
        }
      }
    }
  },
  plugins: [],
}

