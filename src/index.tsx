import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './App'
import { GlobalStyle } from './shared/styles/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
