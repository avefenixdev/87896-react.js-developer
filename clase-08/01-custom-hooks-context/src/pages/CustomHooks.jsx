import { useContext } from "react"
import Contador from "../components/Contador"
import ContadorHook from "../components/ContadorHook"
import useTitulo from "../hooks/useTitulo"
import TemaContext from "../contexts/TemaContext"

const CustomHooks = () => {

  useTitulo('Custom Hooks')

  const {darkMode, toggleTema} = useContext(TemaContext)

  return (
    <>
      <h1>Custom Hooks (Ganchos personalizados)</h1>
      <hr />

      {/* ! Sin hooks personalizado */}
      <Contador valorInicial={22} />

      <hr className="my-4" />

      {/* ! Con hooks personalizado */}
      <ContadorHook valorInicial={22} />

      <h2>Cambiando el color del tema:</h2>
      <button 
        className="bg-green-500 hover:bg-green-700 py-2 px-4 my-3 text-white rounded cursor-pointer"
        onClick={toggleTema}
      >
       { darkMode ? 'Cambiar a modo claro' : 'Cambio a modo oscuro' }
      </button>

    </>
  )
}

export default CustomHooks