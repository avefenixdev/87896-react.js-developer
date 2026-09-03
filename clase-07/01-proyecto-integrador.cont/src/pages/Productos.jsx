import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import { useState } from "react"
import productos from "../constants/productos"

const Productos = () => {

  const [products, setProducts] = useState(productos)

  // CRUD -> Create | Read | Update | Delete
  // ! CREATE
  const createProducto = () => {

  }
  // ! UPDATE
  const updateProducto = () => {

  }
  // ! DELETE
  const deleteProducto = () => {

  }

  return (
    <main className="container mx-auto">
      <h1>Productos Educación IT</h1>
      <hr />

      <Formulario createProducto={createProducto} />

      <Tabla products={products} />

    </main>
  )
}

export default Productos
