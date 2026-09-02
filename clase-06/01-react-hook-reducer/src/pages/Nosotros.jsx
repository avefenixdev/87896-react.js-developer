import { useEffect } from "react"

const Nosotros = () => {

  useEffect(() => {
    document.title = 'Educación IT - Nosotros'
  }, [])
  

  return (
    <>
        <h1>Nosotros</h1>
        <p>¿Quiénes somos?</p>
    </>
  )
}

export default Nosotros