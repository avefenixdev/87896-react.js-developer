import { useState } from "react"

const RenderizadoCondicional = () => {

    const [estaLogueado, setEstaLogueado] = useState(false)// puedo usar cualquier tipo de dato que conozco.


    const loguearse = () => {
        setEstaLogueado(!estaLogueado)
    }

  return (
    <>
    
        <h3 className="text-center text-2xl font-black tracking-tight text-white md:text-3xl">Operador Ternario</h3>
        {
            estaLogueado ? <h1>Bienvenido Maxi</h1> : <h1>Bienvenido Visitante</h1>
        }
        <h3 className="text-center text-2xl font-black tracking-tight text-white md:text-3xl">Operadores Short Circuit</h3>
        {/* && -> Y lógico -> AND */}
        {
            /* true      &&         true            */
            estaLogueado && <h1>Bienvenido Maxi</h1> 
        }

        <button 
            onClick={loguearse}
            className="mt-6 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] active:scale-95 cursor-pointer">
            { estaLogueado ? 'Salir' : 'Ingresar' }
        </button>

    </>
  )
}

export default RenderizadoCondicional