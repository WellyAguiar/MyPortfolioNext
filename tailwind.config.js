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
        'color-bg': 'hsl(var(--bg-ch) / <alpha-value>)',
        'color-surface': 'hsl(var(--surface-ch) / <alpha-value>)',
        'color-surface-2': 'hsl(var(--surface-2-ch) / <alpha-value>)',
        'color-border': 'hsl(var(--border-ch) / <alpha-value>)',

        'color-text': 'hsl(var(--text-ch) / <alpha-value>)',
        'color-text-muted': 'hsl(var(--text-muted-ch) / <alpha-value>)',

        'color-brand': 'hsl(var(--brand-ch) / <alpha-value>)',
        'color-brand-strong': 'hsl(var(--brand-strong-ch) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}