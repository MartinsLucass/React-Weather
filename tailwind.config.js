/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          '300': '#171717',
          '200': '#313131',
          '100': '#444444',
        },
      },
    },
  },
  plugins: [],
};
