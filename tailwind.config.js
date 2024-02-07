/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
       primary:"#1c1917",
       lightgreen:"#4ade80",
       darkgreen:"#052e16",
       gray:"#d1d5db",
       lightgray:"#f3f4f6",
       darkgray:"#f9fafb",
      
      },
    },
    container:{
      center:"true",
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        lg:'4rem',
        xl:'2rem',
      }
    
    },
  },
  plugins: [],
}

