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
        'color-bg': 'var(--color-bg)',
        'color-surface': 'var(--color-surface)',
        'color-surface-2': 'var(--color-surface-2)',
        'color-border': 'var(--color-border)',

        'color-text': 'var(--color-text)',
        'color-text-muted': 'var(--color-text-muted)',
        'color-text-inverse': 'var(--color-text-inverse)',

        'color-brand': 'var(--color-brand)',
        'color-brand-strong': 'var(--color-brand-strong)',
      },
    },
  },
  plugins: [],
}