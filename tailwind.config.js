/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js, jsx, ts, tsx}",
    "./src/home/Home.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#F5F1F1',
        'text-main': "#0C0A2B",
        'text-body': "#000000",
      },
      fontFamily: {
        'main': 'Jost',
      }
    },
  },
  plugins: [],
}

