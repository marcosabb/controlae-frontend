import React from 'react'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import GlobalStyle from './styles/GlobalStyle'

import theme from './theme'

export default function App () {
  return (
    <ThemeProvider theme={theme.light}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}
