import { Link } from "react-router"

const Inicio = () => {
  return (
    <>
        <h1>Inicio</h1>
        <p>Bienvenido a nuestra primera App con router</p>

        {/* Para navegación interna entre páginas del proyecto -> Link */}
        {/* Para navegación externa a páginas fuera del proyecto -> a */}
        <p>Vamos a visitar la página de productos: <Link to="/productos">Productos</Link></p>
        <p>Ahora queremos conocer a quienes forman este proyecto: <Link to="/nosotros">Nosotros</Link></p>
        <p>Ahora visitamos a la página de Google: <a to="https://google.com">Google</a></p>
    </>
  )
}

export default Inicio