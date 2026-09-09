import Contador from "../components/Contador"
import FormularioFormik from "../components/FormularioFormik"
import Productos from "../components/Productos"

const Inicio = () => {
  return (
    <div>

      <h3 className="text-5xl mb-4">Formularios con Formik</h3>

      <FormularioFormik />

      <h2 className="text-5xl mb-4">Estados con Store</h2>
      <Contador />

      <h3 className="text-5xl mb-4">Redux Async</h3>

      <Productos />     

    </div>
  )
}

export default Inicio