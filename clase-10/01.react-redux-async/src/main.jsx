import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Rutas from './routers/Rutas.jsx'
import Navbar from './components/Navbar.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Permiteo que los compoenente descendientes accedan al store */}
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto">
          <Rutas />
        </main>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
