module.exports = {
  mode:'jit',
  purge:["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  darkMode:false,
  theme: {
    extend: {
      backgroundColor: {
        'green-resonate': '#D5DDCF',
      },
      textColor:{
        'black-resonate': '#423F32',
      },
      fontFamily: {
        reborn: ["REBORN", "sans-serif"],
      },    
    },
  },
  variants: {
    extend:{},
  },
  plugins: [],
}
