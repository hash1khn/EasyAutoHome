/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asphalt': '#0A0A0B',
        'racing-red': '#FF2B2B',
        'signal-yellow': '#FFD233',
        'electric-blue': '#2F80FF',
        'gunmetal': '#1C1F26',
        'dark-blue': '#1A3B7F',
        'light-blue': '#E0E8F5',
      },
      backgroundImage: {
        'gradient-red-yellow': 'linear-gradient(135deg, #FF2B2B 0%, #FFD233 100%)',
        'gradient-blue-cyan': 'linear-gradient(135deg, #2F80FF 0%, #00D4FF 100%)',
        'carbon-fiber': 'repeating-linear-gradient(45deg, #1C1F26 0px, #1C1F26 2px, #2A2F3A 2px, #2A2F3A 4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'count-up': 'countUp 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        countUp: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
