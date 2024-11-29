/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';


export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary1: '#7EC7FF',
        primary10: '#0A1323',
        primary20: '#0F1B33',
        primary30: '#125678',
        primary40: '#125678',
        primary50: '#0F638F',
        primary60: '#0C71A5',
        primary70: '#097FBB',
        primary80: '#068DD2',
        primary90: '#039BE8',
        primary100: '#00A9FF',
        primary110: '#38BBFE',
        primary120: '#7DD3FF',
        primary130: '#B0E4FF',
        neutral10: '#FFFFFF',
        neutral20: '#F5F5F6',
        neutral30: '#EEEEEF',
        neutral40: '#E1E2E3',
        neutral50: '#C3C4C7',
        neutral60: '#A0A2A6',
        neutral70: '#999CA2',
        neutral80: '#64686F',
        neutral90: '#434750',
        neutral100: '#0F141F',
        danger: '#E55353',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Poppins',
          fontWeight: '400',
          src: 'url(/src/fonts/Poppins-Regular.ttf)',
        },
      });
      addBase({
        '@font-face': {
          fontFamily: 'Poppins',
          fontWeight: '500',
          src: 'url(/src/fonts/Poppins-Medium.ttf)',
        },
      });
      addBase({
        '@font-face': {
          fontFamily: 'Poppins',
          fontWeight: '600',
          src: 'url(/src/fonts/Poppins-SemiBold.ttf)',
        },
      });
      addBase({
        '@font-face': {
          fontFamily: 'Poppins',
          fontWeight: '700',
          src: 'url(/src/fonts/Poppins-Bold.ttf)',
        },
      });
      addBase({
        '@font-face': {
          fontFamily: 'Poppins',
          fontWeight: '800',
          src: 'url(/src/fonts/Poppins-Black.ttf)',
        },
      });
    }),
  ],
}

