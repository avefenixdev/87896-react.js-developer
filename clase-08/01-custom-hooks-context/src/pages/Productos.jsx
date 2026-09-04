import productos from "../constants/productos"
import ProductoItem from "../components/ProductoItem"
import useTitulo from "../hooks/useTitulo"

const Productos = () => {
  
  // Cuando el componente se monte, el title va a cambiar.
  useTitulo('Productos')
  
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