import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#e6fbff',
          100: '#b3f4ff',
          200: '#66eaff',
          300: '#33e1ff',
          400: '#00d4ff',
          500: '#00afd4',
          600: '#008aaa',
          700: '#006680',
          800: '#004355',
          900: '#00212b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'grid-scroll': 'gridScroll 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scanLine 4s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        gridScroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,212,255,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scanLine: {
          '0%': { top: '0%', opacity: '1' },
          '100%': { top: '100%', opacity: '0.3' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
