import Navbar from "./components/Navbar"
import TituloPrincipal from "./components/TituloPrincipal"


function App() {
  return (
    <div>

      <header>
        <TituloPrincipal />

        <Navbar />
      </header>

      <main>
        <h2>Productos</h2>

        <div>
          <h3>Notebook</h3>
          <p>Precio: $1000</p>
        </div>
        <div>
          <h3>Celular</h3>
          <p>Precio: $800</p>
        </div>
      </main>

      <footer>
        Todos los derechos reservados
      </footer>

    </div>

  )
}

export default App