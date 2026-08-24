import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProductoItem from "./components/ProductoItem"
import TituloPrincipal from "./components/TituloPrincipal"
import TituloSecundario from "./components/TituloSecundario"


function App() {
  return (
    <div>

      <header>
        <TituloPrincipal />

        <Navbar />
      </header>

      <main>
        <TituloSecundario />

        <ProductoItem />
        <div>
          <h3>Celular</h3>
          <p>Precio: $800</p>
        </div>
      </main>

    <Footer />

    </div>

  )
}

export default App