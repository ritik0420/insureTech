/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'sans-serif'],
        'helvetica-neue': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Primary Theme Colors (from HeroSection and Header)
        'primary-blue': '#1199B6', // Vibrant Teal - main brand color
        'dark-navy': '#0C1A2B', // Deep Navy - headings, text, dark sections
        'gold': '#D4AF37', // Gold accent - hover states, highlights
        'light-blue': '#1199B6', // Teal - accents, backgrounds
        'light-teal': '#d7f9ff', // Light teal - backgrounds, borders
        
        // Legacy mappings for backward compatibility
        teal: '#1199B6', // Vibrant Teal - Buttons, highlights, links
        navy: '#0C1A2B', // Deep Navy - Headings, navbar text
        'light-teal': '#d7f9ff', // Light Teal - Background sections
        white: '#FFFFFF', // White backgrounds
        
        // Legacy support (mapped to theme colors)
        primary: {
          DEFAULT: '#1199B6',
          50: '#d7f9ff',
          100: '#d7f9ff',
          200: '#1199B6',
          300: '#1199B6',
          400: '#1199B6',
          500: '#1199B6',
          600: '#1199B6',
          700: '#0C1A2B',
          800: '#0C1A2B',
          900: '#0C1A2B',
        },
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
      },
    },
  },
  plugins: [],
}

