import { Link, useNavigate } from "react-router"
import Contenedor from "../components/composicion/Contenedor"
import useTitulo from "../hooks/useTitulo"

const Inicio = () => {

  const navigate = useNavigate()

  useTitulo('Inicio')
  
  const ingresar = () => {
    // Lógica de logueo -> Se logueó correctamente | No se logueó correctamente
    let isLogin = true
    if (isLogin) {
      console.log('Se logueó correctamente')
      // Link -> Navegación declarativa
      // useNavigate -> Navegación programática
      navigate('/dashboard')
    } else {
      console.log('No se logueó correctamente')
    }
  }

  return (
    <>
        <h1 className="text-4xl font-bold text-gray-900">Inicio</h1>
        <p>Bienvenido a nuestra primera App con router</p>

        {/* Para navegación interna entre páginas del proyecto -> Link */}
        {/* Para navegación externa a páginas fuera del proyecto -> a */}
        <p>Vamos a visitar la página de productos: <Link className="text-blue-600 hover:text-blue-800 hover:underline" to="/productos">Productos</Link></p>
        <p>Ahora queremos conocer a quienes forman este proyecto: <Link className="text-blue-600 hover:text-blue-800 hover:underline" to="/nosotros">Nosotros</Link></p>
        <p>Ahora visitamos a la página de Google: <a className="text-blue-600 hover:text-blue-800 hover:underline" href="https://google.com">Google</a></p>

        <h2 className="text-2xl font-bold text-gray-900">Login</h2>

        <button 
          onClick={ingresar}
          className="mt-3 bg-amber-600 hover:bg-amber-800 py-2 px-4 rounded cursor-pointer text-white"
        >
          Ingresar
        </button>

        <hr />

        <Contenedor />
        
    </>
  )
}

export default Inicio