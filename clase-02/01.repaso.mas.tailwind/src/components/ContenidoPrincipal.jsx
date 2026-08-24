import productos from "../constants/productos"
import ProductoCard from "./ProductoCard"

const ContenidoPrincipal = () => {

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-10 text-center text-3xl font-black tracking-tight text-white md:text-4xl">
          Productos
          <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            destacados
          </span>
        </h2>

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

