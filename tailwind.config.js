/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend:{
      width:{
        '3/10':'40%',
        '7/10':'60%',
      }
    },
    colors:{
      "primary":"var(--color-primary)",
      "secondary":"var(--color-secondary)",
      "white":"var(--color-white)",
      "errors":"var(--color-errors)",
    }

  },
  plugins: [],
}

