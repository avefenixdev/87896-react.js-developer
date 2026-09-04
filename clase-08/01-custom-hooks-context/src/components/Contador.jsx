import { useState } from "react"

const Contador = ({valorInicial}) => {

    const [contador, setContador] = useState(valorInicial)


    const handlerIncrementar = () => {
        setContador(contador + 1)
    }
    const handlerDecrementar = () => {
        setContador(contador - 1)
    }
    const handlerReiniciar = () => {
        setContador(valorInicial)
    }

  return (
    <>
        <h2 className="text-3xl mb-3">Contador: <span className="text-red-500">{contador}</span></h2>
       
        <button 
            onClick={handlerIncrementar} 
            className="me-2 bg-blue-500 hover:bg-blue-700 py-2 px-4 cursor-pointer text-white rounded">
                Incrementar
        </button>
        <button 
            onClick={handlerDecrementar} 
            className="me-2 bg-yellow-500 hover:bg-yellow-700 py-2 px-4 cursor-pointer text-white rounded">
                Decrementar
        </button>
        <button 
            onClick={handlerReiniciar} 
            className="bg-red-500 hover:bg-red-700 py-2 px-4 cursor-pointer text-white rounded">
                Reiniciar
        </button>
    </>
  )
}

export default Contador