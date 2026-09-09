import { useDispatch, useSelector } from "react-redux"
import { decrementar, incrementar, incrementarPorValor, reset } from "../store/slices/contador/contador-slice"

const Contador = () => {

    // Para acceder la informaicón del store utilizo el hook useSelector
    /* const { contador } = useSelector(estado => {
        console.log(estado)
        return estado.contador
    }) */
    const { contador } = useSelector(estado => estado.contador)
    // El useDispatch me permite disparar las acciones
    const dispatch = useDispatch()

    const handleIncrementar = () => {
      dispatch(incrementar()) // Despacha la acción incrementar para que se cambie el estado en el reducer correspondiente del store
    }
    
    const handleIncrementarPorValor = (incremento) => {
      dispatch(incrementarPorValor(incremento))
    }

    const handleDecrementar = () => {
      dispatch(decrementar())
    }

    const handleResetear = () => {
      dispatch(reset())
    }

  return (
    <div>
        <h3 className="text-4xl mb-4">Contador: <span className="text-blue-500">{contador}</span></h3>

        <button 
          onClick={handleIncrementar}
          className="bg-green-500 text-white rounded py-2 px-4 me-2 hover:bg-green-700 cursor-pointer"
        >
            Incrementar
        </button>
        <button 
          onClick={handleDecrementar}
          className="bg-orange-500 text-white rounded py-2 px-4 me-2 hover:bg-orange-700 cursor-pointer"
        >
            Decrementar
        </button>
        <button 
          onClick={() => handleIncrementarPorValor(55)}
          className="bg-red-500 text-white rounded py-2 px-4 me-2 hover:bg-red-700 cursor-pointer"
        >
            Incrementar por favor
        </button>
         <button 
          onClick={handleResetear}
          className="bg-gray-500 text-white rounded py-2 px-4 hover:bg-gray-700 cursor-pointer"
        >
            Resetear
        </button>
    </div> 
  )
}

export default Contador