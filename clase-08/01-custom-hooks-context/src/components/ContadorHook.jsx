import useContador from "../hooks/useContador"

const ContadorHook = ({valorInicial}) => {

    const [counter, handleIncrement,  handleDecrement, handleRestart ] = useContador(valorInicial)
    const [conta, handleIncre,  handleDecre, handleRest ] = useContador(55)

  return (
    <>
        <h2 className="text-3xl mb-3">Contador: <span className="text-red-500">{conta}</span></h2>
       
        <button 
            onClick={handleIncre} 
            className="me-2 bg-blue-500 hover:bg-blue-700 py-2 px-4 cursor-pointer text-white rounded">
                Incrementar
        </button>
        <button 
            onClick={handleDecre} 
            className="me-2 bg-yellow-500 hover:bg-yellow-700 py-2 px-4 cursor-pointer text-white rounded">
                Decrementar
        </button>
        <button 
            onClick={handleRest} 
            className="bg-red-500 hover:bg-red-700 py-2 px-4 cursor-pointer text-white rounded">
                Reiniciar
        </button>
        <hr />
        <hr />
        <h2 className="text-3xl mb-3">Contador: <span className="text-red-500">{counter}</span></h2>
       
        <button 
            onClick={handleIncrement} 
            className="me-2 bg-blue-500 hover:bg-blue-700 py-2 px-4 cursor-pointer text-white rounded">
                Incrementar
        </button>
        <button 
            onClick={handleDecrement} 
            className="me-2 bg-yellow-500 hover:bg-yellow-700 py-2 px-4 cursor-pointer text-white rounded">
                Decrementar
        </button>
        <button 
            onClick={handleRestart} 
            className="bg-red-500 hover:bg-red-700 py-2 px-4 cursor-pointer text-white rounded">
                Reiniciar
        </button>

    </>
  )
}

export default ContadorHook