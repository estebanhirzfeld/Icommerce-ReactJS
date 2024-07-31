import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cuerpo from './cuerpo/cuerpo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root-main')).render(
  <React.StrictMode>
    <Cuerpo />
  </React.StrictMode>
)


