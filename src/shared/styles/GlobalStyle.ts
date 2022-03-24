import { createGlobalStyle } from 'styled-components'
import Constants from '../data/Constants'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${Constants.PRIMARY_COLOR};
    @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
      background-color: ${Constants.SECONDARY_COLOR};
    }
  }

  ol {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }


  p, span, h1, h2, h3, h4, h5, h6 {
    font-family: Arial, Helvetica, sans-serif;
  }
`
