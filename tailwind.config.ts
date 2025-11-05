import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8f0ff',
          200: '#b9e4ff',
          300: '#89d3ff',
          400: '#4ab9ff',
          500: '#1a9bff',
          600: '#0f7be6',
          700: '#0e62b8',
          800: '#0f5598',
          900: '#113f6b',
        },
      },
    },
  },
  plugins: [],
};

export default config;
