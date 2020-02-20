import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'

import theme from './theme'

export default function App () {
  return (
    <ThemeProvider theme={theme.light}>
      <h1>hello</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
