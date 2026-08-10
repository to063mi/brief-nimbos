/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#0f0f10',
          800: '#161618',
          700: '#1e1e22',
          600: '#2a2a30',
        },
        accent: {
          blue: '#3b82f6',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'mesh-drift': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(3%, -2%) scale(1.05)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'mesh-drift': 'mesh-drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
