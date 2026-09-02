import { useState } from "react"

const Contador = () => {

    const valorInicial = 55

    const [contador, setContador] = useState(valorInicial)

    const handleIncrementar = () => {
        setContador(contador + 1)
    }

    const handleDecrementar = () => {
         setContador(contador - 1)
    }

    const handleReiniciar = () => {
        setContador(valorInicial)
    }


  return (
    <div>Contador</div>
  )
}

export default Contador