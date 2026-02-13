/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Material Design Color System
      colors: {
        primary: {
          DEFAULT: '#1976d2',
          light: '#42a5f5',
          dark: '#1565c0',
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        secondary: {
          DEFAULT: '#9c27b0',
          light: '#ba68c8',
          dark: '#7b1fa2',
        },
        error: '#d32f2f',
        warning: '#ed6c02',
        info: '#0288d1',
        success: '#2e7d32',
        surface: {
          DEFAULT: '#ffffff',
          dark: '#121212',
        },
        background: {
          DEFAULT: '#fafafa',
          dark: '#121212',
        },
        'on-primary': '#ffffff',
        'on-secondary': '#ffffff',
        'on-surface': {
          DEFAULT: 'rgba(0, 0, 0, 0.87)',
          dark: 'rgba(255, 255, 255, 0.87)',
        },
      },
      // Material Design Typography
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['96px', { lineHeight: '1.167', letterSpacing: '-1.5px', fontWeight: '300' }],
        'h2': ['60px', { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '300' }],
        'h3': ['48px', { lineHeight: '1.167', letterSpacing: '0', fontWeight: '400' }],
        'h4': ['34px', { lineHeight: '1.235', letterSpacing: '0.25px', fontWeight: '400' }],
        'h5': ['24px', { lineHeight: '1.334', letterSpacing: '0', fontWeight: '400' }],
        'h6': ['20px', { lineHeight: '1.6', letterSpacing: '0.15px', fontWeight: '500' }],
        'subtitle1': ['16px', { lineHeight: '1.75', letterSpacing: '0.15px', fontWeight: '400' }],
        'subtitle2': ['14px', { lineHeight: '1.57', letterSpacing: '0.1px', fontWeight: '500' }],
        'body1': ['16px', { lineHeight: '1.5', letterSpacing: '0.5px', fontWeight: '400' }],
        'body2': ['14px', { lineHeight: '1.43', letterSpacing: '0.25px', fontWeight: '400' }],
        'button': ['14px', { lineHeight: '1.75', letterSpacing: '1.25px', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.66', letterSpacing: '0.4px', fontWeight: '400' }],
        'overline': ['10px', { lineHeight: '2.66', letterSpacing: '1.5px', fontWeight: '400' }],
      },
      // Material Design Elevation (box-shadow)
      boxShadow: {
        'elevation-0': 'none',
        'elevation-1': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        'elevation-2': '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        'elevation-3': '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
        'elevation-4': '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        'elevation-6': '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        'elevation-8': '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
        'elevation-12': '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
        'elevation-16': '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
        'elevation-24': '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
      },
      // Material Design Spacing (8dp grid)
      spacing: {
        '0.5': '4px',
        '1': '8px',
        '1.5': '12px',
        '2': '16px',
        '2.5': '20px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '9': '72px',
        '10': '80px',
      },
      // Material Design Border Radius
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
      // Material Design Transitions
      transitionDuration: {
        'shortest': '150ms',
        'shorter': '200ms',
        'short': '250ms',
        'standard': '300ms',
        'complex': '375ms',
        'entering': '225ms',
        'leaving': '195ms',
      },
    },
  },
  plugins: [],
}
