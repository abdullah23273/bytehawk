/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        surface: {
          DEFAULT: '#12121A',
          elevated: '#1A1A24',
          subtle: '#161622',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.16)',
          accent: 'rgba(99, 102, 241, 0.3)',
        },
        content: {
          primary: '#F5F5F7',
          secondary: '#A1A1AA',
          muted: '#6B6B78',
        },
        brand: {
          indigo: '#6366F1',
          cyan: '#22D3EE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        pill: '9999px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
        'accent-gradient-hover': 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(99, 102, 241, 0.25)',
        'glow-md': '0 0 40px -8px rgba(99, 102, 241, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(34, 211, 238, 0.25)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}