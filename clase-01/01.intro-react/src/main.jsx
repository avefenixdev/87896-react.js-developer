import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' /* Contiene todos los estilos a nivel global de react */
import App from './App.jsx'
// Punto de montaje de la aplicaicón React
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
