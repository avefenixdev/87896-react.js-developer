
const Hijo1 = ({ setMensaje }) => { // props = { setMensaje}

  const handlerCambiarMensaje = () => {
    setMensaje('Cambio el mensaje desde HIJO1')
  }

  return (
    <button className="bg-blue-500" onClick={handlerCambiarMensaje}>Cambiar Mensaje</button>
  )
}

export default Hijo1