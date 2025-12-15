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
        'primary-blue': '#2B75FF', // Primary blue - main brand color
        'dark-navy': '#0E1C36', // Dark navy - headings, text, dark sections
        'gold': '#D4AF37', // Gold accent - hover states, highlights
        'light-blue': '#AFCBFF', // Light blue - accents, backgrounds
        'light-teal': '#d7f9ff', // Light teal - backgrounds, borders
        
        // Legacy mappings for backward compatibility
        teal: '#AFCBFF', // Light Blue - Buttons, highlights, links
        navy: '#0E1C36', // Dark Navy - Headings, navbar text
        'light-teal': '#d7f9ff', // Light Blue - Background sections
        white: '#FFFFFF', // White backgrounds
        
        // Legacy support (mapped to theme colors)
        primary: {
          DEFAULT: '#2B75FF',
          50: '#d7f9ff',
          100: '#d7f9ff',
          200: '#AFCBFF',
          300: '#AFCBFF',
          400: '#2B75FF',
          500: '#2B75FF',
          600: '#2B75FF',
          700: '#0E1C36',
          800: '#0E1C36',
          900: '#0E1C36',
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

