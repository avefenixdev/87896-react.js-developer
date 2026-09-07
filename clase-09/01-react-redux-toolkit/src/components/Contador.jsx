import { useDispatch, useSelector } from "react-redux"
import { decrementar, incrementar, incrementarPorValor } from "../store/slices/contador/contador-slice"

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
      dispatch(decrementar( ))
    }

  return (
    <div>
        <h2>Contador: {contador}</h2>

        <button onClick={handleIncrementar}>Incrementar</button>
        <button onClick={handleDecrementar}>Decrementar</button>
        <button onClick={() => handleIncrementarPorValor(55)}>Incrementar por favor</button>
    </div>
  )
}

export default Contador