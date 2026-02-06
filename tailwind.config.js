/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#06080d',
        panel: '#0b0f16',
        border: '#1b2538',
        neon: '#2dfdc5',
        text: '#f5f7fb',
        muted: '#9aa5bc'
      },
      borderRadius: {
        xl2: '1.2rem'
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(45,253,197,0.22), 0 0 30px rgba(45,253,197,0.2)'
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        floatUp: 'floatUp .8s ease-out both'
      }
    }
  },
  plugins: []
};

