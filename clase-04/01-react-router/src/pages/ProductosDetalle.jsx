import { useLocation, useParams } from "react-router"

const ProductosDetalle = () => {

    // useParams: Este hook nos lee los parametros recibidos por la url
    const { id } = useParams()
    console.log(id)

    // useLocation: Este hook nos muestra (consulta) la url actual
    const location = useLocation() // Nos sirve para obtener la url actual y trabajar con el Query String
    console.log(location)

  return (
    <div>Productos Detalle: {id} | Ruta actual: {location.pathname}</div>
  )
}

export default ProductosDetalle