import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProviderValuesGlobal } from './context/Provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderValuesGlobal >
    <App />
  </ProviderValuesGlobal>
)
