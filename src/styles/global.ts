import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #F15156;
    color: #FFFFFF;
  }

  button {
    cursor: pointer;
  }

  body, input, button, textarea, select  {
    font: 400 16px 'Nunito', sans-serif;
  }
`
