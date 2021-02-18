const plugin = require('tailwindcss/plugin')

module.exports = {
  corePlugins: {
    container: false
  },
  future: {
    removeDeprecatedGapUtilities: true
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.ma-input': {
          width: '100%',
          height: theme('spacing.9'),
          paddingLeft: theme('spacing.2'),
          paddingRight: theme('spacing.2'),
          outline: 'none',
          border: `1px solid ${theme('colors.ma-gray-2')}`,

          '&:focus': {
            borderColor: theme('colors.ma-gray-3'),
            borderWidth: '2px',
            paddingLeft: `calc(${theme('spacing.2')} - 1px)`,
            paddingRight: `calc(${theme('spacing.2')} - 1px)`
          },

          '&:disabled': {
            backgroundColor: '#F2F2F2'
          }
        },
        '.ma-input--error': {
          borderColor: '#E16968',
          borderWidth: '2px',
          '&:focus': {
            borderColor: '#E16968'
          }
        },

        '.ma-btn': {
          height: theme('spacing.9'),
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: theme('fontSize.base'),
          transitionDuration: '200ms',
          transitionProperty: 'background-color, border-color, color',
          transitionTimingFunction: 'ease'
        },

        '.ma-btn--blue': {
          backgroundColor: theme('colors.ma-blue-1'),
          color: '#fff',

          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.ma-blue-0')
          }
        },

        '.ma-btn--blue-o': {
          color: theme('colors.ma-blue-1'),
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.ma-blue-1')}`,

          '&:hover:not(:disabled)': {
            color: '#fff',
            backgroundColor: theme('colors.ma-blue-1')
          }
        }
      })
    })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    extend: {
      colors: {
        'ma-black-0': '#151515',
        'ma-black-1': '#4A4A4A',
        'ma-gray-0': '#F7F7F7',
        'ma-gray-1': '#DCDCDC',
        'ma-gray-11': '#E9E9E9',
        'ma-gray-2': '#C9C9C9',
        'ma-gray-22': '#BFBEBE',
        'ma-gray-3': '#999999',
        'ma-blue-0': '#227584',
        'ma-blue-1': '#67C7D8',
        'ma-teal-0': '#CEEDF2',
        'ma-teal-1': '#B9CDD4',
        'ma-teal-2': '#73A9B2',
        'ma-red-1': '#E06969',
        'ma-red-2': '#E33333',
        'ma-green-1': '#B8E986',
        'ma-green-2': '#96CD89',
        'ma-green-3': '#43bbd3'
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        default: theme('colors.ma-gray-2')
      }),
      fontFamily: {
        freight: ['freight-sans-pro', 'sans-serif'],
        gilmer: ['Gilmer', 'sans-serif']
      },
      lineHeight: {
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px'
      },
      opacity: {
        60: '0.6'
      },
      screens: {
        xl: '1440px',
        xxl: '1600px'
      }
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '64px'
    },
    spacing: {
      0: '0',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      8: '40px',
      9: '45px',
      10: '50px',
      12: '60px',
      16: '80px',
      20: '100px',
      24: '120px',
      32: '160px',
      40: '200px',
      48: '240px',
      56: '280px',
      64: '320px',
      80: '400px',
      96: '480px'
    },
    width: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '40px',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '160px',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      76: '380px',
      120: '600px',
      auto: 'auto',
      px: '1px',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw'
    }
  },
  variants: {}
}
