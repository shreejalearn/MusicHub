module.exports = {
  mode:'jit',
  purge:["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  darkMode:false,
  theme: {
    extend: {
      backgroundColor: {
        'green-resonate': '#D5DDCF',
        'yellow-resonate': '#F1EBE5',
        'orange-resonate': '#F4D487',
      },
      textColor:{
        'black-resonate': '#423F32',
      },
      fontFamily: {
        reborn: ["REBORN", "sans-serif"],
        CG_Reg: ["CG_Reg", "sans-serif"],
      },
      borderColor: {
        'black-resonate': '#423F32', // Replace with your custom color value
      },    
    },
  },
  variants: {
    extend:{},
  },
  plugins: [],
}
