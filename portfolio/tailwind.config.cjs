// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        border: 'var(--border)',
      },
      ringColor: {
        ring: 'var(--ring)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      }

    },
  },
  plugins: [],
}
