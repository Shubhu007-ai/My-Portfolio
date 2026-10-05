/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F7F5F0',
          secondary: '#EFEDE7',
          card: '#FFFFFF',
          elevated: '#FFFFFF',
        },
        text: {
          primary: '#171717',
          secondary: '#666666',
          muted: '#8A8A8A',
        },
        border: {
          subtle: '#E4E1D9',
          hover: '#4F46E5',
        },
        accent: {
          primary: '#4F46E5',
          hover: '#3730A3',
          soft: '#EEF2FF',
          secondary: '#7C3AED',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        'subtle-radial': 'radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.06) 0%, rgba(247, 245, 240, 0) 70%)',
      },
      boxShadow: {
        'card-subtle': '0 1px 3px 0 rgba(23, 23, 23, 0.04), 0 1px 2px -1px rgba(23, 23, 23, 0.02)',
        'card-elevated': '0 4px 16px -2px rgba(23, 23, 23, 0.06), 0 2px 6px -1px rgba(23, 23, 23, 0.03)',
        'accent-soft': '0 4px 14px 0 rgba(79, 70, 229, 0.25)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
