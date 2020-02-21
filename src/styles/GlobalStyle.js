import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import { theme } from 'styled-tools'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

toast.configure({
  autoClose: 3000
})

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    min-height: 100%;
  }

  body {
    font-family: ${theme('font.default.family')};
    font-size: ${theme('font.default.size')};
    color: ${theme('font.default.color')};
    letter-spacing: ${theme('font.default.spacing')};
    background-color: ${theme('colors.background')};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, textarea {
    letter-spacing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: ${theme('spacing.default')};
  }

  button {
    letter-spacing: inherit;
  }
`

export default GlobalStyle
