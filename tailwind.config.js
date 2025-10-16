/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        primary: {
          DEFAULT:'rgb(var(--primary) / <alpha-value>)',
          foreground:'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        terciary: {
          DEFAULT:'rgb(var(--terciary) / <alpha-value>)',
          foreground:'rgb(var(--terciary-foreground) / <alpha-value>)',
        },

      },
    },
  },
  plugins: [],
}

