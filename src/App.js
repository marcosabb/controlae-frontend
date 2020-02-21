import React, { useState, useEffect, useCallback } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import Lamp from 'components/Lamp'

import Routes from './routes'
import GlobalStyle from './styles/GlobalStyle'

import store from './store'
import theme from './theme'

export default function App () {
  const [dark, setDark] = useState(null)

  useEffect(() => {
    const storage = localStorage.getItem('@controlae:dark')

    if (storage) {
      setDark(JSON.parse(storage))
    } else {
      setDark(false)
    }
  }, [])

  const handleToggle = useCallback(() => {
    setDark(!dark)

    localStorage.setItem('@controlae:dark', JSON.stringify(!dark))
  }, [dark])

  return (
    <Provider store={store}>
      <ThemeProvider theme={dark ? theme.dark : theme.light}>
        <Lamp handleClick={handleToggle} />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </Provider>
  )
}
