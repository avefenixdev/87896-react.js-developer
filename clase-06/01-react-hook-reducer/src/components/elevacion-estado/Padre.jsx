import Hijo1 from "./Hijo1"
import Hijo2 from "./Hijo2"
import { useState } from "react"

const Padre = () => {
  
  const [mensaje, setMensaje] = useState("Hola soy el componente HIJO2")

  return (
    <>
        <Hijo1 setMensaje={setMensaje} />
        <Hijo2 mensaje={mensaje} />    
    </>
  )
}

export default Padre