import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import App from './App'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
