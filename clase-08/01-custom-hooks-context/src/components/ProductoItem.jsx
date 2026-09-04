import { Link } from "react-router"

const ProductoItem = (props) => {
  const {producto} = props

  return (
    <li>
        <Link className="text-blue-600 hover:text-blue-800 underline" to={producto.id}>
            {producto.nombre}
        </Link>
    </li>
  )
}

export default ProductoItem