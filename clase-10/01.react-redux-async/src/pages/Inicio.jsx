import Contador from "../components/Contador"
import Productos from "../components/Productos"

const Inicio = () => {
  return (
    <div>
      <h2 className="text-5xl mb-4">Estados con Store</h2>
      <Contador />

      <h3 className="text-5xl mb-4">Redux Async</h3>

      <Productos />

    </div>
  )
}

export default Inicio