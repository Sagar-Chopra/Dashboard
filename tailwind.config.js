/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10277C', 
        secondary: '#16a34a',
        blue: '#3855B3',
        lightBlue: '#B3E5FB',
        borderColor: '#E6E7E9',
        textLight: '#181819',
        green: '#4CAF50',
        red: '#DD425A',
        grayButton: '#f8f8f9',
        checkbox: '#919294',
        tableHead: '#f8f8fa',
        selectedRow: '#f7f8fc',
        orange: '#FFA000',
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
      },
      fontWeight: {
        '400': '400',
        '500' : '500'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      padding: {
        '46': '46px'
      }
    },
  },
  plugins: [],
};
export default config;

