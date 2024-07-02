/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        kanit:  '"Kanit", sans-serif',
        roboto: '"Roboto", sans-serif',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "night", "dark", "sunset", "coffee", "forest", "black", "dracula", "dim"],
  },
}

