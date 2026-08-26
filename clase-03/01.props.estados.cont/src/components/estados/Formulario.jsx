//rafce

import { useState } from "react"

const Formulario = () => {

    const [nombre, setNombre] = useState("")

    const handleChange = (e) => {
        //console.log('Cambio')
        // console.log(e.target.value)
        //debugger
        /* const valor = e.target.value
        setNombre(valor) */
        setNombre(e.target.value)
    }

   /*  addEventListener('change', (e) => {}) */
   /*  addEventListener('change', handleChange) */

    return (
        <form className="my-6 mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="lbl-nombre"
                    className="text-sm font-semibold text-gray-700"
                >
                    Ingrese el nombre: {nombre}
                </label>

                <input
                    type="text"
                    id="lbl-nombre"
                    value={nombre}
                    /* onChange={handleChange} */
                    onChange={(e) => setNombre(e.target.value)}
                    className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                />
            </div>
        </form>
    )
}

export default Formulario