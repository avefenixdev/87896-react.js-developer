import { useReducer } from "react"
import { contadorReducer, initialState } from '../../reducers/contadorReducer'
const ContadorReducer = () => {

   // ! useReducer: Es una alternativa superior al gestor de estado useState. Cuando me queda chico o generar confusión la cantidad de funciones que modifican el estado que tengo.

   // useReducer() <--- es una función
   // useReducer(reducer, valorInicialObjeto) <--- recibe 2 argumentos
   // useReducer(() => {}, { contador: 22 }) <--- recibe 2 argumentos
   //              ⬆️⬆️ <--- una función pura (reducer)

   // Una función pura, no modifica internamente el valor de las variables   

   const [estado, dispatch] = useReducer(contadorReducer, initialState)

   //console.log(estado) // estado ->  { contador: 22 }
   //console.log(dispatch) // -> una referencia de una función

   const handleIncrementar = () => {
    dispatch({ type: 'incrementar' })
   }

   const handleDecrementar = () => {
    dispatch({type: 'decrementar'})
   }

   const handleResetear = () => {
    dispatch({type: 'resetear'})
   }

   const handleIncrementarXValor = () => {
    dispatch({type: 'incrementarXValor', payload: 5 } )
   }

  return (
    <>
      <h1>Contador (Reducer) {estado.contador}</h1>
      <hr />

      <button className="bg-violet-600" onClick={handleIncrementar}>Incrementar</button>
      <button className="bg-green-600" onClick={handleDecrementar}>Decrementar</button>
      <button className="bg-mauve-600 text-white" onClick={handleResetear}>Resetear</button>
      <button className="bg-orange-600" onClick={handleIncrementarXValor}>Incrementar x Valor</button>
    </>
  )
}

export default ContadorReducer