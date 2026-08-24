
const ProductoCard = (props) => {
    console.log(props.data)
    const { descripcion } = props.data // Desestructure descripción

    const precioCon10DeAumento = props.data.precio * 1.10

  return (
    <article>
          <h3>{props.data.nombre}</h3>
          <p>{descripcion}</p>
          <p>Precio: {precioCon10DeAumento}</p>
          <button>Comprar</button>
    </article>
  )
}

export default ProductoCard