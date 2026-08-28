import { useState } from "react"


const Saludo = () => {

    const [nombre, setNombre] = useState("")

    const handleChange = (e) => setNombre(e.target.value)

  return (
    <form className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        
        <label htmlFor="lbl-nombre" className="text-sm font-semibold text-gray-700">
            Nombre: 
        </label>
            <input type="text"
                id="lbl-nombre"
                value={nombre}
                onChange={handleChange} 
                className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200" />
        {
            nombre
                ? 
                    (<p className="text-sm font-semibold text-gray-700">Hola, {nombre}</p>)
                : 
                    (<p className="text-sm font-semibold text-gray-700">Ingrese su nombre</p>)
        }
    </form>
  )
}

export default Saludo