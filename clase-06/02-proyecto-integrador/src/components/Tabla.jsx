import { useState } from "react"
import TablaFila from "./TablaFila"
import productos from "../constants/productos"

const Tabla = () => {

  const [products, setProducts] = useState(productos)
  console.log(products)

  return (
    <>
       <h2 className="text-2xl font-black text-blue-600 mb-3">Listado de productos</h2>
        <div className="overflow-x-auto w-full">
            <table>
                <thead className="min-w-full text-sm text-gray-700 border border-gray-300 rounded-lg shadow-md">
                    <tr className="bg-gray-100 text-gray-900 uppercase text-xs font-semibold">
                        <th className="px-4 py-3 border-b">Nombre de producto</th>
                        <th className="px-4 py-3 border-b">Categoría</th>
                        <th className="px-4 py-3 border-b">Precio</th>
                        <th className="px-4 py-3 border-b">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                  {
                    products.map(product => (
                      <TablaFila key={product.id} product={product} />
                    ))
                  }

                </tbody>
            </table>
        </div>
    </>
  )
}

export default Tabla
