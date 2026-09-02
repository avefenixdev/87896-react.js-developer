
const ProductoInfo = ({productoEcontrado}) => {
  return (
    <article>
        <p>Nombre: {productoEcontrado.nombre}</p>
        <p>Categoría: {productoEcontrado.categoria}</p>
        <p>Precio: {productoEcontrado.precio}</p>
    </article>
  )
}

export default ProductoInfo