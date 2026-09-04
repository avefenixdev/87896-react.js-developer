import { useLocation, useParams } from "react-router"
import productos from "../constants/productos"
import ProductoInfo from "../components/ProductoInfo"
import useTitulo from "../hooks/useTitulo"

const ProductosDetalle = () => {

    useTitulo('Producto Detalle')

    // useParams: Este hook nos lee los parametros recibidos por la url
    const { id } = useParams()
    console.log(id)

    // useLocation: Este hook nos muestra (consulta) la url actual
    const location = useLocation() // Nos sirve para obtener la url actual y trabajar con el Query String
    console.log(location)

    console.log(productos)

    const productoEcontrado = productos.find(producto => producto.id === id) || {}

    console.log(productoEcontrado)

  return (
    <>
        <h1 className="text-2xl font-black text-red-800">Productos Detalle: {id} | Ruta actual: {location.pathname}</h1>
    
        {
            Object.keys(productoEcontrado).length === 0 ?
                (
                    <h2>Producto no encontrado</h2>
                ) :
                (
                   <ProductoInfo 
                        productoEcontrado={productoEcontrado} 
                    />
                )
        }
    </>
  )
}

export default ProductosDetalle