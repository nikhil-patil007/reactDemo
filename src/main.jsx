import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoaderContext from './context/LinearProgressContext/LoaderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <LoaderContext>
      <App />
    </LoaderContext>
)
