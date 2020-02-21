const shared = (colors) => ({
  colors: {
    white: '#fff',
    danger: '#e74c3c',
    blue: '#0652DD',
    ...colors
  },

  font: {
    reset: {
      family: 'Roboto, sans-serif',
      size: '16px',
      spacing: '0.0200rem',
      color: colors.text
    },

    xs: '.75rem',
    sm: '.875rem',
    default: '1rem',
    md: '1.25rem',
    lg: '1.5rem'
  },

  spacing: {
    xs: '6px',
    sm: '12px',
    default: '20px',
    md: '28px',
    lg: '34px'
  },

  radius: {
    xs: '4px',
    sm: '8px',
    default: '16px',
    md: '32px',
    lg: '64px'
  }
})

export default {
  light: shared({
    background: '#fff',
    text: '#171822',
    ripple: 'rgba(23, 24, 34, .08)',
    placeholder: 'rgba(23, 24, 34, .5)',
    grey: '#f1f3f6',
    lightgrey: '#fcfdfe'
  }),

  dark: shared({
    title: 'dark',
    background: '#171822',
    text: '#fff',
    ripple: 'rgba(255, 255, 255, .08)',
    placeholder: 'rgba(255, 255, 255, .5)',
    grey: '#212330',
    lightgrey: '#191a24'
  })
}
