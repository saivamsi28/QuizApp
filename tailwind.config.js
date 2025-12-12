/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.65)",
      },
      boxShadow: {
        glass: "0 20px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
}
