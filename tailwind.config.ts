import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '3xl': ['2rem', { letterSpacing: '110%' }],
        '4xl': ['2.5rem', { letterSpacing: '110%' }],
        '6xl': ['3.5rem', { letterSpacing: '110%' }],
      },
      colors: {
        amber: {
          DEFAULT: '#78350F',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        slate: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1536px',
      },
      boxShadow: {
        'xs': '0 0 2px 0 rgb(0 0 0 / 0.07)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 0 2px 0 rgb(0 0 0 / 0.07)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 4px 0 rgb(0 0 0 / 0.07)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 0 6px 0 rgb(0 0 0 / 0.07)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 0 10px 0 rgb(0 0 0 / 0.07)',
        '2xl':
          '0 25px 50px -12px rgb(0 0 0 / 0.25), 0 0 15px 0 rgb(0 0 0 / 0.07)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
        'light':
          '0 25px 50px -12px rgb(255 255 255 / 0.25), 0 0 15px 0 rgb(255 255 255 / 0.07)',
      },
    },
  },
  plugins: [],
};
export default config;
