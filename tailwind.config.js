const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'media',
  theme: {
    screens: {
      xs: '490px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1496px'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        footer: '3fr 2fr',
        subfooter: '2fr 1fr'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.500'),
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'none'
              }
            },
            'h1,h2,h3,h4,h5,h6': {
              fontWeight: 800,
              'scroll-margin-top': defaultTheme.spacing[32]
            },
            strong: { fontWeight: 700 }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.blue.400')
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100')
            },
            strong: { color: theme('colors.gray.200') }
          }
        }
      })
    }
  },
  variants: {
    typography: ['responsive', 'dark']
  },
  plugins: [require('@tailwindcss/typography')]
}
