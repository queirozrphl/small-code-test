import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Ensure your main CSS (with Tailwind) is imported here or in App.jsx
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 