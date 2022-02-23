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
        'gold-100': '#FCF6BA',
        'gold-900': '#AA771C',
        'pale': 'rgba(103,103,103,0.2)'
      },
      backgroundImage: {
        'hero1': "url('/bg.jpg')",
        'secondary': "url('/bg4.png')",
        'hero2': "url('/bg2.jpg')",
        'hero3': "url('/bg3.jpg')"
      },
      fontSize: {
        'xxxs': '.50rem',
        'xxs': '.60rem'
      },
      borderRadius: {
        'xl': '2rem'
      },
    },
  },
  plugins: [],
}
