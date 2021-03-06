module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '860px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'transbl' : 'rgba( 0, 0, 0, 0.5)',
        'primary': '#ECC770',
        'primary-metallic' : '#D6A756',
        'gold-100': '#FCF6BA',
        'gold-900': '#AA771C',
        'platinum': '#8babc2',
        'pale': 'rgba(103,103,103,0.2)'
      },
      backgroundImage: {
        'hero1': "linear-gradient(to bottom, rgba(22, 22, 27, 0.9), rgba(41,41,52,0.8)), url('/bg.jpg')",
        'secondary': "url('/bg4.png')",
        'hero2': "url('/bg2.jpg')",
        'hero3': "url('/bg3.jpg')",
        'gold' : 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)'
      },
      fontSize: {
        'xxxs': '.50rem',
        'xxs': '.60rem',
        '10xl': '12rem',
      },
      borderRadius: {
        'xl': '2rem',
        'xxl': '3rem',
        'sl': '1.5rem' // 
      },
      letterSpacing: {
        'widestest': '5rem',
        'mobile-widestest': '1.5rem' 
      },
      boxShadow: {
        'custom': 'inset 0 0 0 0 #D4AF37',
        'custom-hover': 'inset 100px 0 0 0 #D4AF37'
      },
      borderWidth: {
        '3': '3px'
      },
      gridTemplateColumns: {
        'dynamic': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      minWidth: {
        '2xl':'72rem',
      },
      width: {
        'xl': '32rem',
      }
    },
  },
  plugins: [],
}
