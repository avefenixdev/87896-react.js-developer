import { useEffect } from "react"
import Padre from "../components/elevacion-estado/Padre"

const Nosotros = () => {

  useEffect(() => {
    document.title = 'Educación IT - Nosotros'
  }, [])
  

  return (
    <>
        <h1>Nosotros</h1>
        <p>¿Quiénes somos?</p>
        <hr />

        <Padre />
    </>
  )
}

export default Nosotros