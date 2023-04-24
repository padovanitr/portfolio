import { createTheme } from '@mui/material'
import type { Shadows } from '@mui/material/styles/shadows'
import { colors } from './utils/colors'

const shadows = Array(25).fill('') as Shadows
shadows[1] = '0px 0px 10px rgba(0, 0, 0, 0.15)'
shadows[2] = '0px 4px 20px rgba(0, 0, 0, 0.18)'
shadows[3] = '0px 4px 20px rgba(46, 49, 146, 0.08)'
shadows[4] = '0px 0px 6px rgba(46, 49, 146, 0.18)'
shadows[5] = '0px 4px 16px 0px rgba(92, 92, 92, 0.09)'

const baseTheme = createTheme({
  breakpoints: {
    values: {
      // these are the min-width a view-port activates
      xs: 0,
      sm: 414,
      md: 768,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: colors.mainBlack,
    },
    secondary: {
      main: colors.red,
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.375rem',
      lineHeight: 1.4,
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.125rem',
      lineHeight: 1.4,
      fontWeight: 600,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
      fontStyle: 'normal',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4,
      fontStyle: 'normal',
    },
    body1: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 0.75,
      fontStyle: 'normal',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.4rem',
      fontStyle: 'normal',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': {
            margin: 'inherit',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '12px',
          },

          '*::-webkit-scrollbar-thumb': {
            opacity: 0.8,
            backgroundColor: colors.linkWaterGray,
            border: '4px solid transparent',
            backgroundClip: 'padding-box',
            borderRadius: '8px',
            height: '100px',
          },

          '*::-webkit-scrollbar-corner': {
            background: 'transparent',
          },
        },
      },
    },
  },
  spacing: (factor: number) => `${0.5 * factor}rem`,
  shadows,
})

export default baseTheme
