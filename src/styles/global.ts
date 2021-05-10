import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;

    height: 250px;
    width: 400px;
  }

  #root {
    background: ${props => props.theme.colors.primary};

    height: 250px;
    width: 400px;
  }
`
