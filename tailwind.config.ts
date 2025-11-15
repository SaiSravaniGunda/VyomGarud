import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#ff7b00',
        },
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          dark: '#0f0f0f',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

