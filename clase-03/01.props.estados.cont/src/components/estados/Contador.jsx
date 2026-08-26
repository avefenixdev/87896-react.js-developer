//rafce

import { useState } from "react"

const Contador = ({ valorInicial }) => { //{ valorInicial }
    //const { valorInicial } = props

    // Props inmutables ( no cambian )
    // State mutables ( cambian ) -> EL COMPONENTE SE VA A RECARGAR -> Un estado es la memoria del componente y cuando cambie el valor, el componente se va a volver a ejecutar

    // ! Estados en los componentes
    // Aparecen en la versión 16.8 los hooks o ganchos dentro de librería. Esto nos permite agregar estados an nuestros componentes creados con funciones
    // Los hooks son funciones
    //const contador = 5
    //console.log(useState(5)) // Inicializo el estado en 5
    // La función useState me retorna un array de 2 posiciones
    //  0     1
    // [5, function() {}]
    // [0] -> Estado
    // [1] -> Función que modifica el estado (A partir de ahora para modificar el estado (5) tengo que utilizar la función)
    //const arrayContador = useState(5)
    //console.log(arrayContador)
    //const valorInicial = 222
    //console.log(arrayContador[0]) // estado
    //console.log(arrayContador[1]) // función que modifica el estado

    // const [contador, setContador] = useState(5)// 5 es el valor de inicialización del estado

    //console.log(contador) // El estado en valor 5
    //console.log(setContador) // la función que modifica el estado (contador) -> Es la referencia de una función

    // Bindearle, conectarle un evento al botón incremenetar
    /* React Binding de evento -> Asocia a elementos de dom un evento */
    /*                         ⬇️ le paso una función sin ejecutar, la referencia. No llamo, ejecuto o invoco a la función que coloque dentro de las llaves */
    /* <etiqueta onEvento={<callback>}>Texto</etiqueta> */ /* Una función pasada como argumento de otra función */
    //btn.addEventListener('click', callback)
    /* btn.addEventListener('click', () => {

    })
    const conNombre = () => {

    }
     btn.addEventListener('click', conNombre)
    */
    /* const saludar = () => {
        console.log('Saludando incremento')
    } */

    //const valorInicial = 22

    const [contador, setContador] = useState(valorInicial)

    const incremento = () => {
        //console.warn('incrementando...')
        //console.log(contador) // 5
        //contador++ // ! NO PUEDO HACER ESTO A PARTIR DE AHORA
        //contador = contador + 1
        //console.log(contador)
        //console.log(contador) // 6
        setContador(contador + 1) // Para modificar los estados creados con useState la función que modifica el estado. setNombreEstado
        //console.log(contador)
    }

    const decremento = () => {
        setContador(contador - 1)
    }

    const reiniciar = () => {
        setContador(valorInicial)
    }

    return (
        <>
            <h3 className="mb-10 text-center text-3xl font-black tracking-tight text-white">Contador</h3>

            <p className="mb-4 text-center text-2xl font-bold text-gray-800">
                Contador: <span className="text-blue-600">{contador}</span>
            </p>

            <div className="flex justify-center gap-3 mb-6">
                <button
                    onClick={incremento}
                    className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-600 active:scale-95"
                >
                    Incrementar
                </button>

                <button
                    onClick={decremento}
                    className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600 active:scale-95"
                >
                    Decrementar
                </button>

                <button
                    onClick={reiniciar}
                    className="rounded-lg bg-gray-600 px-4 py-2 font-semibold text-white transition hover:bg-gray-700 active:scale-95"
                >
                    Reiniciar
                </button>
            </div>
        </>
    )
}

export default Contador