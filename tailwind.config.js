/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
  ],
  theme: {
    screens: {
      "sm": "376px",
      "md": "768px",
    },
    colors: {
      "light": "hsl(0, 0%, 99%)",
      "medium": "hsl(0, 0%, 75%)",
      "dark": "hsl(0, 0%, 15%)",
    },
  },
  plugins: [],
}

