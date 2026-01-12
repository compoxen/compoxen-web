/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#020617',
          amber: {
            DEFAULT: '#D97706',
            dark: '#B45309',
          }
        },
        surface: {
          glass: 'rgba(255, 255, 255, 0.08)',
          glassBorder: 'rgba(255, 255, 255, 0.18)',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // ~72px
        'display-md': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],   // ~64px
        'display-sm': ['2.5rem', { lineHeight: '1.2' }],                           // ~40px
      }
    },
  },
  plugins: [],
}
