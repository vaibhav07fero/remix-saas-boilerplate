import type { Config } from 'tailwindcss'

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

