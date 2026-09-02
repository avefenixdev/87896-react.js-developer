import { useReducer } from "react"

const ContadorReducer = () => {

   // ! useReducer: Es una alternativa superior al gestor de estado useState. Cuando me queda chico o generar confusión la cantidad de funciones que modifican el estado que tengo.

   // useReducer() <--- es una función
   // useReducer(reducer, valorInicialObjeto) <--- recibe 2 argumentos
   // useReducer(() => {}, { contador: 22 }) <--- recibe 2 argumentos
   //              ⬆️⬆️ <--- una función pura (reducer)

   // Una función pura, no modifica internamente el valor de las variables

   /* const funcionPura = () => {

      let valor = 5

      const sumaDos = () => {
        return valor + 2
      }

      console.log(valor) // 5
      console.log(sumaDos()) // 7
      console.log(valor) // 5

   } */

   //funcionPura()

  /*  const funcionImpura = () => {

      let valor = 5

      const sumaDos = () => {
        valor = valor + 2
        return valor
      }

      console.log(valor) // 5
      console.log(sumaDos()) // 7
      console.log(valor) // 7

   } */

   //funcionImpura()

   // useReducer retorna una array de 2 posiciones
   // const [estado, dispatch] = useReducer(() => {}, { contador: 22 })
   // 1. estado -> { contador: 22 }
   // 2. dispatch -> una referencia de una función -> dispatch()
   const initialState = 22
   // Acciones -> Incrementar | Descrementarse | Reiniciar
   // El reducer deber ser puro
   const contadorReducer = (estado, accion) => { // estado = {} | accion = {}
    console.log(estado) // { contador: 22 }
    console.log(accion) // { accion.type = 'incrementar', accion.payload: 5 }

    switch (accion.type) {
        case 'incrementar':
            //estado.contador = estado.contador + 1
            return { // clonar el estado
                ...estado, // { contador: 22 }
                contador: estado.contador + 1
            }
        case 'decrementar':
            return {
                ...estado,
                contador: estado.contador - 1
            }
        case 'resetear':
            return {
              ...estado,
              contador: initialState
            }
        case 'incrementarXValor':
            return {
              ...estado,
              contador: estado.contador + accion.payload
            }
    
        default:
            console.log('Se intento hacer una acción que no existe...')
            return estado
    }

   }

   

   const [estado, dispatch] = useReducer(contadorReducer, { contador : initialState })

   console.log(estado) // estado ->  { contador: 22 }
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