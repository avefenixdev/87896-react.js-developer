import { useEffect } from "react"

const Hooks = () => {

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




  return (
    <div>Hooks</div>
  )
}

export default Hooks