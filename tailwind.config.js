import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Use RGB values for better opacity control
        primary: 'var(--primary)',
        primary2: 'var(--primary2)',
        secondary: 'var(--secondary)',
        secondary2: 'var(--secondary2)',
        gray: 'var(--gray)'
      },
      // Width should be defined without -- prefix
      width: {
        parent: '80vw'
      }
    }
  },
  plugins: [],
})