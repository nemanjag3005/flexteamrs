module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ECC770',
        'primary-metallic' : '#D4AF37',
      },
      backgroundImage: {
        'hero1': "url('/bg.jpg')",
        'secondary': "url('/bg3.png')"
      }
    },
  },
  plugins: [],
}
