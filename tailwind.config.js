/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        background: '#262d37',
        foreground: '#f9f9f9',
        primary: '#2494e7',
        secondary: '#ec7269',
        border: '#21272f',
        card: '#f9f9f9',
        'card-foreground': '#262d37',
        input: '#f9f9f9',
        ring: '#2494e7',
        accent: '#ec7269',
        'accent-foreground': '#f9f9f9',
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
    },
  },
  plugins: [],
}
