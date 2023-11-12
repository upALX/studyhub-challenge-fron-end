import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Compo} from './compo.jsx'
import {Header} from './header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Compo/>
  </React.StrictMode>,
)
