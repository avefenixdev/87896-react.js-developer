import { useEffect } from "react"

const Contacto = () => {

   useEffect(() => {
      document.title = 'Educación IT - Contacto'
   }, [])


  return (
    <>
        <h1>Contacto</h1>
        <p>Formulario de contacto</p>
    </>
  )
}

export default Contacto