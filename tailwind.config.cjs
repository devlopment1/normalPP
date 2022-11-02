/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    colors: {
      'gray-1': '#f4f4f4',
      'gray-2': '#4b4b4b',
      'gray-3': '#757575',
      'gray-4': '#E2E2E2',
      dark: '#1B1B1B',
      red: '#bd1b1b',
      white: '#ffffff',
    },
    backgroundColor: {
      'gray-1': '#f4f4f4',
      'gray-2': '#4b4b4b',
      'gray-3': '#757575',
      'gray-4': '#E2E2E2',
      red: '#bd1b1b',
      white: '#ffffff',
      cream: '#FFF2DA',
      'light-pink': '#BD1B1B26',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-image': 'url("./assets/images/one.jpg")',
        'facility-img': 'url("./src/assets/images/IMG_2055@2x.png")',
      },
    },
    plugins: [],
  },
};
