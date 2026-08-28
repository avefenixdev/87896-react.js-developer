import productos from "../constants/productos"
import ProductoItem from "../components/ProductoItem"

const Productos = () => {
  return (
    <>
        <h1>Productos</h1>
        <p>Listado de productos</p>

        <ul>
          { 
            productos.map(producto => (
              <ProductoItem key={producto.id} producto={producto} />
            ))
          
          }

        </ul>       
        
        
    </>
  )
}

export default Productos