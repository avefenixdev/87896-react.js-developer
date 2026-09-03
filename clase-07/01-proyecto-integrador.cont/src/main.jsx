import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Productos from './pages/Productos.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProductoDetalle from './pages/ProductoDetalle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <main className="container mx-auto">
        <Routes>
          <Route path='/' element={<Productos />} />
          <Route path='/productos/detalle/:id' element={<ProductoDetalle />} />
        </Routes>
      </main>

    </BrowserRouter>
  </StrictMode>,
)
