import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      {/* Lo que coloque dentro de Browser Router va a ser visible siempre */}
      <Navbar />

      <main className="container mx-auto">

        <Rutas />

        {/* <Routes> 

            <Route path='/' element={<Inicio />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/productos/:id' element={<ProductosDetalle />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/custom-hooks' element={<CustomHooks />} />
            <Route path='/contexto' element={<Contexto />} /> 
            <Route path='/hooks' element={<Hooks />} /> 
            <Route path='/contacto' element={<Contacto />} /> 
            <Route path='/dashboard' element={<Dashboard />} /> 
            <Route path='*' element={<NoEncontrado />} /> 

        </Routes> */}
      </main>

    
    </BrowserRouter>
  </StrictMode>,
)
