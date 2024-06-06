/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'work': ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        'White-Color': 'hsl(0, 0%, 100%)',
        'Light-pink': 'hsl(275, 100%, 97%)',
        'Grayish-purple': 'hsl(292, 16%, 49%)',
        'Dark-purple': 'hsl(292, 42%, 14%)',
      }
    },
  },
  plugins: [],
}

