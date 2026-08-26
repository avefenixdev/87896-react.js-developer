//rafce

import { useState } from "react"

const FormularioSubmit = () => {

    const valorInicialNombre = ''

    const [nombre, setNombre] = useState(valorInicialNombre)

    const handleChange = (e) => setNombre(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario listo para hacer validaciones o enviarse')

        const informacion = {
            nombre
        }

        console.log('Enviando...')
        console.log(informacion)
        setNombre(valorInicialNombre)
    }

    return (
        <form onSubmit={handleSubmit} className="my-6 mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
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
                    onChange={handleChange}
                    className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                />

            </div>
            <button type="submit" className="mt-6 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] active:scale-95 cursor-pointer">
                Mostrar en consola!
            </button>
        </form>
    )
}

export default FormularioSubmit