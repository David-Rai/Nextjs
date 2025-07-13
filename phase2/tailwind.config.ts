/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui:{
themes:['light','dark','synthwave']
  },
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  