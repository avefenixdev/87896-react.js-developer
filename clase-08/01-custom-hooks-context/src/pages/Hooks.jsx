import { useEffect, useState } from "react"
import ContadorReducer from "../components/reducer/ContadorReducer"
import useTitulo from "../hooks/useTitulo"

const Hooks = () => {

    useTitulo('Hooks')

    /*
        ! REGLAS CLAVES SOBRE LOS HOOKS

        * 1.- Los hooks deben llamarse en en nivel superior del componente

        function Contador() {
            const [contador, setContador] = useState(0) <----- el hook está declarado en la parte superior

            return <button>{contador}</button>
        }

        * 2.- Los hooks solamente deben llamarse desde un componente o dentro de otro hooks (hook personalizados)
        function useContador() {
            const [contador, setContador] = useState(0) 

            return { contador, setContador }
        }
    */

    /* 
        * useEffect -> Permite ejecutar efectos secundarios
        https://react.dev/reference/react/useEffect

        ! Efecto Secundario (useEffect) 
        ? Es un gancho (hook) como el useState pero permite en este caso, estar atento (pendiente) 
        ? de cambio que se produzca en un estado, props o en el ciclo de vida del componente. 
        ? En el ciclo de vida del componente podría ejecutar código.

        addEventListener('click', accionSecundaria) <---- parecido a un evento de js

        * llamadas HTTP
        * timers
        * suscripciones
        * interacciones con APIs externas
        * modificar determinados efectos externos del render


        ! CICLO DE VIDA DE LOS COMPONENTES DE REACT

        * nace -> 1. Montaje -> Nace o se monta en la interfaz el componente -> Aparece en pantalla
        * vive -> 2. Actualización -> Se actualiza... (Props, o estado)
        * muere -> 3. Desmonaje -> El componente muere. Se destruye -> Desaparece de la pantalla.

        ! Arquitectura del useEffect (recibe 2 argumentos)
        * Es una función que recibe 2 argumentos.    
    */
        // const accionSecundario = () => {}
        // addEventListener('click', accionSecundaria)
        //useEffect(accionSecundario, [array-referencias])
        //useEffect(accionSecundario, ['click', 'change'])
        //useEffect(accionSecundario, [contador, isActive]) // si cambia -> estado, props -> dispara la acción secundaria
        
        // 1. Primer argumento -> una función -> callback -> (Una función pasada como argumento de otra)
        // 2. Segundo argumento -> es un array de referencias. funciones, estados, props
        
        // useEffect(callback, [])

        // ! MONTAJE (1)
        // ! * nace -> 1. Montaje -> Nace o se monta en la interfaz el componente -> Aparece en pantalla
        useEffect(() => {
            console.log('Componente aparece en pantalla...')
            console.log(`Cuando el array de referencias está vacío se ejecuta el callback cuando el 
                componente se muestra en pantalla (nace)`)
        }, [])
        // Resultado que debería ver. Cuando el componente aparece en pantalla se dispara el callback (acción secundaria)

        // ! DESMONTAJE (3)
        // * muere -> 3. Desmonaje -> El componente muere. Se destruye -> Desaparece de la pantalla.
        useEffect(() => {
            return () => {
                console.log('Componente desaparece de pantalla')
                console.log('El array está vacío y el componente desaparece de pantalla (desmonta)')
            }
        }, [])

        // ! ACTUALIZACION (2)
        // * vive -> 2. Actualización -> Se actualiza... (Props, o estado)

        const [contador, setContador] = useState(55)
        const [claseColor, setClaseColor] = useState('text-blue-500')

        useEffect(() => {
            console.log('Se modifico el estado contador')

            if ( contador === 60 ) {
                console.log('Supero el valor de 60')
                // setClaseColor('text-yellow-500')
            }

        }, [contador])
        
  return (
    <>
        <h1 className="text-2xl text-indigo-600 text-center">Efecto Secundario</h1>

        <h2 className={`text-xl ${claseColor}`}>Contador: {contador}</h2>
        <button 
            className="bg-amber-600 hover:bg-amber-800 cursor-pointer rounded py-2 px-4 text-white"
            onClick={() => setContador(contador + 1)}
        >
            Incrementar
        </button>

        <hr />

        <h2>Contador Reducer</h2>

        <ContadorReducer />
    </>
  )
}

export default Hooks