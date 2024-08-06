/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary:"#1F2029",
          secondary:"#141316",
          gray:"#9899A1",
          active:"#7396FE"
      }
    },
  },
  plugins: [],
}

