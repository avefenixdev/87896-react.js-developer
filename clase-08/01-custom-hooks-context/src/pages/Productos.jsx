import productos from "../constants/productos"
import ProductoItem from "../components/ProductoItem"
import { useEffect } from "react"

const Productos = () => {
  
  // Cuando el componente se monte, el title va a cambiar.
  useEffect(() => {
    document.title = 'Educación IT - Productos'    
  }, [])
  
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