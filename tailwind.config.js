/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a1e14',
        body: '#3f3d3d',
        muted: '#707372',
        hint: '#555555',
        line: '#dddddd',
        // IHG brand
        ihg: {
          green: '#216245',
          purple: '#472d82',
          orange: '#d96930',
          link: '#0000ee',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f6f6f6',
          muted: '#f0f0f0',
          wash: '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      },
      maxWidth: {
        container: '1260px',
        wide: '1280px',
        prose: '929px',
      },
      borderRadius: {
        tag: '3px',
        btn: '5px',
        card: '10px',
        pill: '30px',
        full: '50%',
      },
      boxShadow: {
        soft: 'rgba(0, 0, 0, 0.09) 0px 4px 16px 0px',
        ring: 'rgb(191, 184, 175) 0px 0px 5px 0px',
        subtle: 'rgba(0, 0, 0, 0.07) 1px 4px 7px 0px',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease both',
        fadeInUp: 'fadeInUp 0.5s ease both',
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}