/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        vuejs: "#00401a"
      },
      height: {
        128: "35rem"
      },
      fontFamily: {
        lora: "'Lora' , serif",
        inter: "'Inter', serif",
      }
    }
  },
  plugins: [],
}

