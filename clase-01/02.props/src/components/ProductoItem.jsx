//rafce

const ProductoItem = (props) => {
  const {tituloProducto, precio} = props

  return (
    <div>
        <h3>{tituloProducto}</h3>
        <p>Precio: ${precio}</p>
    </div>
  )
}

export default ProductoItem