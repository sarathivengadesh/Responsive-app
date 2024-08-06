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
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: '8px',
          },
          "&::-webkit-scrollbar-track": {
            background: '#1F2029',
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: 'gray',
            borderRadius: '10px',
            border: '2px solid #1F2029',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        }
      }
      addUtilities(newUtilities,["responsive","hover"])
    }
  ],
}

