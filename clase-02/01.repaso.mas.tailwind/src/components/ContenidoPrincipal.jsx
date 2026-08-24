import productos from "../constants/productos"
import ProductoCard from "./ProductoCard"

const ContenidoPrincipal = () => {

  return (
    <main>
        <h2>Productos destacados</h2>

        {/* article>h3{Notebook}+p{Notebook para desarrollo}+p{Precio: $1200}+button{Comprar} */}
        {/* <ProductoCard data={productos[0]} />
        <ProductoCard data={productos[1]} />
        <ProductoCard data={productos[2]} /> */}

        {
            productos.map((producto) => (
                <ProductoCard data={producto} key={producto.id} />      
            ))  
        }
      
      </main>
  )
}

export default ContenidoPrincipal

