/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        montagu: ['Montagu Slab', 'serif'],
      },
      colors: {
        'dark': '#10002A',
        'accent': '#00D2D2',
        'white-light': 'rgba(255, 255, 255, 0.5)',

      },
      dropShadow: {
        'l': '0 10px 20px rgba(0, 255, 255, 0.15)',
        'container': '0 10px 20px rgba(16, 0, 42, 0.10)',
      }
    },
  },
  plugins: [],
}