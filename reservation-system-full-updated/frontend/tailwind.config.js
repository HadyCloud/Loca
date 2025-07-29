/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#5B3E99',    // deep royal purple
        secondary: '#E3D3F1',  // lavender
        accent: '#FFD700',     // gold
        bg: '#F4F0FA',         // off‑white
      },
      fontFamily: {
        sans: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
