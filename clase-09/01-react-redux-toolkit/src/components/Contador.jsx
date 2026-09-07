import { useSelector } from "react-redux"

const Contador = () => {

    // Para acceder la informaicón del store utilizo el hook useSelector
    /* const { contador } = useSelector(estado => {
        console.log(estado)
        return estado.contador
    }) */
    const { contador } = useSelector(estado => estado.contador)

  return (
    <div>
        <h2>Contador: {contador}</h2>
    </div>
  )
}

export default Contador