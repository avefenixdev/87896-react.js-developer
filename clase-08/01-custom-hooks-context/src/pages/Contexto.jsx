import { useContext } from "react"
import useTitulo from "../hooks/useTitulo"
import ContadorContext from "../contexts/ContadorContext"

const Contexto = () => {

  useTitulo('Contexto')

  const { contador, incrementar, decrementar } = useContext(ContadorContext)
  


  return (
    <>
      <h1>Contexto</h1>
      <hr />
      <h2 className="text-2xl my-4">Contador Contexto: {contador}</h2>

      <button 
        onClick={incrementar} 
        className="me-2 bg-orange-500 hover:bg-orange-700 rounded text-white cursor-pointer py-2 px-3">
          Incrementar
      </button>
      <button 
        onClick={decrementar} 
        className="bg-violet-500 hover:bg-violet-700 rounded text-white cursor-pointer py-2 px-3">
          Decrementar
      </button>
      
    </>
  )
}

export default Contexto