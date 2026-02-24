import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F1F7F9',
          100: '#C7DEE4',
          500: '#8FBDC9',
          600: '#1E7A93',
          800: '#175C6F',
          1000: '#63AC51',
          1200: '#4B813D'
        }
      }
    }
  },
  plugins: []
};

export default config;
