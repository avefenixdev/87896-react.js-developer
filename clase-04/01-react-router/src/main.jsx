import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes> {/* Switch */}

           <Route path='/' element={<Inicio />} /> {/* case */}
           <Route path='/productos' element={<Productos />} /> {/* case */}
           <Route path='/nosotros' element={<Nosotros />} /> {/* case */}
           <Route path='/contacto' element={<Contacto />} /> {/* case */}
           <Route path='*' element={<NoEncontrado />} /> {/* default */}

      </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
