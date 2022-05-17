import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #root {
      height: 100%;
      width: 100%;
      background-color: ${theme.colors.black100};
    }

    body {
      font-family: ${theme.font.family};
    }
  `}
`

export default GlobalStyles
