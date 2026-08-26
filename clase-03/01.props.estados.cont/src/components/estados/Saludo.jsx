

const Saludo = () => {

    /* Enunciado: 
    
        Crear un componente saludo -> Utilizando el snippet -> rafce
        Tener un input -> con un label nombre

        Texto -> Hola, Pedro
        Y si no escribió nada el p (texto) nos diga -> Por favor, ingrese su nombre
    */

  return (
    <form>

        <label htmlFor="">Nombre</label>
        <input type="text" />

        <p>Hola, 'estado-nombre'</p>

    </form>
  )
}

export default Saludo