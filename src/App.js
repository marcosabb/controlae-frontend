import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import GlobalStyle from './styles/GlobalStyle'

import store from './store'
import theme from './theme'

export default function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.light}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}
