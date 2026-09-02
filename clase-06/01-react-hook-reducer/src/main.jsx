import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProductosDetalle from './pages/ProductosDetalle.jsx'
import Hooks from './pages/Hooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      {/* Lo que coloque dentro de Browser Router va a ser visible siempre */}
      <Navbar />

      <main className="container mx-auto">
        <Routes> {/* Switch */}

            <Route path='/' element={<Inicio />} /> {/* case */}
            <Route path='/productos' element={<Productos />} /> {/* case */}
            <Route path='/productos/:id' element={<ProductosDetalle />} /> {/* case */}
            <Route path='/nosotros' element={<Nosotros />} /> {/* case */}
            <Route path='/hooks' element={<Hooks />} /> {/* case */}
            <Route path='/contacto' element={<Contacto />} /> {/* case */}
            <Route path='/dashboard' element={<Dashboard />} /> {/* case */}
            <Route path='*' element={<NoEncontrado />} /> {/* default */}

        </Routes>
      </main>

    
    </BrowserRouter>
  </StrictMode>,
)
