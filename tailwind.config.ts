import type { Config } from "tailwindcss";
import path from "path";

const config: Config = {
  content: [
    path.join(__dirname, "src/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#442B63',
          purpleDark: '#2D1847',
          lavender: '#A27EAB',
          pink: '#E4BDDD',
          charcoal: '#333333',
          grey: '#666666',
          offwhite: '#FAF8FB',
          border: '#E2D9E6',
        }
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'brand-card': '0 4px 24px rgba(68, 43, 99, 0.08)',
        'brand-hover': '0 16px 48px rgba(68, 43, 99, 0.16)',
        'brand-btn': '0 4px 20px rgba(162, 126, 171, 0.35)',
      }
    },
  },
  plugins: [],
};
export default config;
