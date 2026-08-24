import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProductoItem from "./components/ProductoItem"
import TituloPrincipal from "./components/TituloPrincipal"
import TituloSecundario from "./components/TituloSecundario"


function App() {

  const productos = [
    { id: 1, nombre: 'Notebook', precio: 1000 },
    { id: 2, nombre: 'Celular', precio: 800 },
    { id: 3, nombre: 'Tablet', precio: 900 },
    { id: 4, nombre: 'Heladera', precio: 2000 },
    { id: 5, nombre: 'Notebook', precio: 1200 },
  ]

  return (
    <div>

      <header>
        <TituloPrincipal titulo="Mi primera app en React" />

        <Navbar />
      </header>

      <main>
        <TituloSecundario />

        {
          productos.map(producto => (
            <ProductoItem key={producto.id} tituloProducto={producto.nombre} precio={producto.precio} />
          ))
        }
        
      </main>

    <Footer texto="Todos los derechos reservados 2026" />

    </div>

  )
}

export default App