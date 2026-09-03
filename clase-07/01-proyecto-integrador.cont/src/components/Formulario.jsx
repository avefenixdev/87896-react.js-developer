import { useRef, useState } from "react"

const Formulario = ({ createProducto }) => { // props = { createProducto }

  console.log(createProducto)


  // ! Formularios no controlados (useRef) <---- Almacena la referencia de un nodo html

  /* const nombreRef = useRef()
  const categoriaRef = useRef() */

  /* const handleSubmitNoControlado = (e) => {
    e.preventDefault()

    console.log(nombreRef.current.value)
    console.log(nombreRef.current.name)
    console.log(categoriaRef.current.value)
    console.log(categoriaRef.current.name)

    const productoListo = {
      [nombreRef.current.name]: nombreRef.current.value,
      [categoriaRef.current.name]: categoriaRef.current.value
    }

    console.log('----> Petición async')
    console.log(productoListo)

  } */

  /* const [nombre, setNombre] = useState('') */

   /*  const handleSubmitNombre = (e) => {
    e.preventDefault()
    console.log(nombre)
  } */

 /*  const handleChangeNombre = (e) => {
    const nuevoValor = e.target.value
    setNombre(nuevoValor)
  } */

  // ! Formularios controlados <-------- Recomendable

    const [form, setForm] = useState({
      id: null,
      nombre: '',
      categoria: '',
      precio: ''
    })

    console.log(form)

    const handleSubmit = (e) => {
      e.preventDefault()

      createProducto(form) // El producto que quiero agregar a mi estado productos

    }

    const handleChange = (e) => {

      console.log(e.target.value)
      console.log(e.target.name)

      // debugger

      const nuevoForm = {
        ...form,
        [e.target.name]: e.target.value
      }

      setForm(nuevoForm)
    }





  return (
     <>
      <h2 className="text-2xl font-black text-blue-600 mb-3">Formulario de carga y edición</h2>
      <form onSubmit={handleSubmit} className="border border-blue-500 rounded-2xl w-full max-w-md px-6 py-4 mb-10">
        {/* Campo nombre */}
        <div className="mb-4">
          <label htmlFor="lbl-nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input
            type="text"
            value={form.nombre}
            onChange={handleChange}/*  ref={nombreRef} */
            name="nombre"
            id="lbl-nombre"
            className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        {/* Campo categoría */}
        <div className="mb-4">
          <label htmlFor="lbl-categoria"  className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
          <input
            type="text"
            value={form.categoria}/*  ref={categoriaRef} */
            onChange={handleChange}
            name="categoria"
            id="lbl-categoria"
            className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        {/* Campo precio */}
        <div className="mb-4">
          <label htmlFor="lbl-precio"  className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
          <input
            type="text"
            value={form.precio}
            onChange={handleChange}
            id="lbl-precio"
            name="precio"
            className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        {/* Botones */}
        <div className="mb-4 flex gap-3">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">Cargar o Editar</button>
          <button type="reset" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer">Reiniciar</button>
        </div>
      </form>
    </>
  )
}

export default Formulario
