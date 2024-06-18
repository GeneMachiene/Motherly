/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    // customizing screens based on React Grid System for compatibility.
    screens: {
      'sm': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '992px',
      // => @media (min-width: 992px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1600px',
      // => @media (min-width: 1600px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      backgroundImage: {
        'motherly-pattern': "url('/img/footer-texture.png')",
      },
      screens: {
        'xs': '576px',
        // => @media (min-width: 576px) { ... }
      },
    }
  },
  corePlugins: {
    preflight: false,
  }
}

