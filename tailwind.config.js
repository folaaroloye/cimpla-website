/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        primary:  {
          100: "#D9DDFF",
          200: "#A8B2FF",
          300: "#7487FF",
          400: "#295BFF",
          500: "#003BBF",
          600: "#002175",
          700: "#000C3A",
        },
        secondary:  {
          100: "#FFEFD3",
          200: "#FFCD29",
          300: "#D1A700",
          400: "#A48200",
          500: "#795F00",
          600: "#513F00",
          700: "#2B2000",
        },
        black: {
          100: '#121212',
          200: '#000000'
        },
        white: '#FFFFFF',
        warning: '#F2BD37',
        grey: {
          100: '#DEDEE0',
          200: '#B6B7BB',
          300: '#909097',
          400: '#6B6C74',
          500: '#494A50',
          600: '#2A2A2E',
          700: '#101113',
        },
        error: '#EB4028',
      },
      fontSize: {
        sz0: ['0.75rem', '1rem'], // fontSize: 12px line-height: 16px
        sz1: ['0.875rem', '1.125rem'], // fontSize: 14px line-height: 18px
        sz2: ['0.875rem', '1.25rem'], // fontSize: 14px line-height: 20px
        sz3: ['1rem', '1.25rem'], // fontSize: 16px line-height: 20px
        sz4: ['1rem', '1.5rem'], // fontSize: 16px line-height: 24px
        sz5: ['1.25rem', '1.5rem'], // fontSize: 20px line-height: 24px

        sz6: ['1.5rem', '1.75rem'], // fontSize: 24px line-height: 28px
        sz7: ['1.75rem', '2rem'], // fontSize: 28px line-height: 32px
        sz8: ['2.5rem', '3rem'], // fontSize: 40px line-height: 48px
        sz9: ['2rem', '2.5rem'], // fontSize: 40px line-height: 48p

        display0: ['2rem', '2.5rem'], // fontSize: 40px line-height: 48px
        h1: ['2.75rem', '3.75rem', '400'], // fontSize: 44px line-height: 60px font weight 400
        h2: ['2.5rem', '3.5rem', '400'], // fontSize: 40px line-height: 56px font weight 400
        h3: ['2.25rem', '3.25rem', '400'], // fontSize: 36px line-height: 52px font weight 400
        h4: ['2rem', '3rem', '400'], // fontSize: 32px line-height: 48px font weight 400
        h5: ['1.75rem', '2.25rem', '400'], // fontSize: 28px line-height: 36px font weight 400
        h6: ['1.5rem', '1.75rem', '400'], // fontSize: 24px line-height: 28px font weight 400
      },
      width: {
        '66': '4.125rem',
        '109': '6.813rem',
        '143': '8.938rem',
        '161': '10.063rem',
        '200': '45rem',
        '240': '15rem',
        '320': '20rem',
        '360': '22.5rem',
        '376': '23.5rem',
        '392': '24.5rem',
        '396': '24.75rem',
        '400': '25rem',
        '436': '27.375rem',
        '760': '47.5rem',
      },
      height: {
        '64': '4rem',
        '72': '4.5rem',
        '96': '6rem',
        '160': '10rem',
      },
      boxShadow: {
        s0: '0px 0px 30px rgba(0, 0, 0, 0.1)',
        s1: '0px 0px 12px rgba(0, 0, 0, 0.08)',
        s2: '2px 10px 30px rgba(0, 0, 0, 0.07)',
        s3: '0px 0px 25px rgba(0, 0, 0, 0.06)',
        s4: '5px 5px 40px rgba(0, 0, 0, 0.05)',
        s5: '2px 4px 20px rgba(0, 0, 0, 0.05);',
        s6: '0px 2px 2px 0px rgba(0, 0, 0, 0.10);',
        s7: '0px 2px 4px rgba(0, 0, 0, 0.2);',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
