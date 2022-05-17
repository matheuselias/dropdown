export default {
  border: {
    radius: '1rem'
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 400,
    normal: 600,
    bold: 900,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    // backgrounds
  black100: 'hsla(225, 14%, 12%, 1)',
  black200: 'hsla(225, 14%, 14%, 1)',
  black300: 'hsla(225, 14%, 16%, 1)',
  black400: 'hsla(225, 14%, 18%, 1)',
  black500: 'hsla(225, 14%, 20%, 1)',
  black600: 'hsla(225, 14%, 22%, 1)',
  black700: 'hsla(225, 14%, 24%, 1)',
  black800: 'hsla(225, 14%, 26%, 1)',
  black900: 'hsla(225, 14%, 28%, 1)',
  
  // text
  white100: 'hsla(225, 14%, 100%, 1)',
  white200: 'hsla(225, 14%, 100%, 0.8)',

  // primary
  blue100: 'hsla(210, 100%, 37%, 1)',
  blue200: 'hsla(210, 100%, 33%, 1)',
  blue300: 'hsla(210, 100%, 35%, 1)',
  blue400: 'hsla(210, 100%, 33%, 0.5)',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '12rem'
  }
} as const
