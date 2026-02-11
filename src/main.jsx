import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 👇 IMPORT IMPORTANT DU JOUR 24
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 👇 ON ENVELOPPE L'APPLICATION */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)