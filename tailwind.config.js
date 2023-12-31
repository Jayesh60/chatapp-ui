/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'light-salmon' : "#F3AE9F",
        'gray': "#181818",
        'light-gray' : "#2F2F2F",
        'black' : '#050505',
      },
      boxShadow:{
        'menu' : "rgba(7,_65,_210,_0.1)_0px_9px_30px",
        'menu2': "inset 0 2px 4px 0 rgba(0,0,0,0.05);"
      }
    },
  },
  plugins: [],
}
