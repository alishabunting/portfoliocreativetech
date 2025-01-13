/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 12rem)',
        'section': 'clamp(3rem, 9vw, 9rem)',
        'project': 'clamp(2.5rem, 4rem, 4rem)',
      },
      maxWidth: {
        'container': '1400px',
      },
      spacing: {
        'section': '8rem',
      },
    },
  },
  plugins: [],
} 