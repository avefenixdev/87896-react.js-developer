import { Link } from "react-router"

const Inicio = () => {
  return (
    <>
        <h1>Inicio</h1>
        <p>Bienvenido a nuestra primera App con router</p>


        <p>Vamos a visitar la página de productos: <a href="/productos">Productos</a></p>
    </>
  )
}

export default Inicio