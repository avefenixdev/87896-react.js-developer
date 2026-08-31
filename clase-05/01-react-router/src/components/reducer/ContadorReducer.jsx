import { useReducer } from "react"

const ContadorReducer = () => {

   // ! useReducer: Es una alternativa superior al gestor de estado useState. Cuando me queda chico o generar confusión la cantidad de funciones que modifican el estado que tengo.

   // useReducer() <--- es una función
   // useReducer(reducer, valorInicialObjeto) <--- recibe 2 argumentos
   // useReducer(() => {}, { contador: 22 }) <--- recibe 2 argumentos
   //              ⬆️⬆️ <--- una función pura (reducer)

   // Una función pura, no modifica internamente el valor de las variables

   const funcionPura = () => {

      let valor = 5

      const sumaDos = () => {
        return valor + 2
      }

      console.log(valor) // 5
      console.log(sumaDos()) // 7
      console.log(valor) // 5

   }

   //funcionPura()

   const funcionImpura = () => {

      let valor = 5

      const sumaDos = () => {
        valor = valor + 2
        return valor
      }

      console.log(valor) // 5
      console.log(sumaDos()) // 7
      console.log(valor) // 7

   }

   //funcionImpura()

   // useReducer retorna una array de 2 posiciones
   // const [estado, dispatch] = useReducer(() => {}, { contador: 22 })
   // 1. estado -> { contador: 22 }
   // 2. dispatch -> una referencia de una función -> dispatch()

   // Acciones -> Incrementar | Descrementarse | Reiniciar
   // El reducer deber ser puro
   const contadorReducer = (estado, accion) => { // estado = {} | accion = {}
    console.log(estado) // { contador: 22 }
    console.log(accion) // { accion.type = 'incrementar' }

    switch (accion.type) {
        case 'incrementar':
            // estado.contador = estado.contador + 1
            return { // clonar el estado
                ...estado, // { contador: 22 }
                contador: estado.contador + 1
            }
            
        case 'decrementar':
            
            break;
    
        default:
            console.log('Se intento hacer una acción que no existe...')
            return estado
    }

   }

   const [estado, dispatch] = useReducer(contadorReducer, { contador : 22 })

   // console.log(estado) // estado ->  { contador: 22 }
   //console.log(dispatch) // -> una referencia de una función

   


  return (
    <div>ContadorReducer</div>
  )
}

export default ContadorReducer