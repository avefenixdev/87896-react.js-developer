
const ContadorReducer = () => {

   // ! useReducer: Es una alternativa superior al gestor de estado useState. Cuando me queda chico o generar confusión la cantidad de funciones que modifican el estado que tengo.

   // useReducer() <--- es una función
   // useReducer(reducer, valorInicialObjeto) <--- recibe 2 argumentos
   // useReducer(() => {}, { contador: 22 }) <--- recibe 2 argumentos
   //              ⬆️⬆️ <--- una función pura

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

  return (
    <div>ContadorReducer</div>
  )
}

export default ContadorReducer