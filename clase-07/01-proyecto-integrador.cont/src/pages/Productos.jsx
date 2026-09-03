import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import { useState } from "react"
import productos from "../constants/productos"
import { v4 as uuidv4 } from 'uuid';

const Productos = () => {

  const [products, setProducts] = useState(productos)

  // CRUD -> Create | Read | Update | Delete
  // ! CREATE
  const createProducto = (nuevoProducto) => {
    //console.log(nuevoProducto) // <--- llega desde el formulario de carga
    //nuevoProducto.id = Date.now()
    nuevoProducto.id = uuidv4()
    //products.push(nuevoProducto) // ! NO HACER --> No hacer modificación directa del estado

    const nuevoArrayProductos = [...products, nuevoProducto]
    setProducts(nuevoArrayProductos)
  }
  // ! UPDATE
  const updateProducto = () => {

  }
  // ! DELETE
  const deleteProducto = (id) => {
    console.log(id)

  }

  return (
    <main className="container mx-auto">
      <h1>Productos Educación IT</h1>
      <hr />

      <Formulario createProducto={createProducto} />

      <Tabla products={products}  deleteProducto={deleteProducto} />

    </main>
  )
}

export default Productos
