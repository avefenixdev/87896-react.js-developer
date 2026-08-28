import { useState } from "react";

const SaludoJudith = () => {

    const [name, setName] = useState("");
    
    const handleChange = (e) => setName(e.target.value)

    return (
        <form className="mt-4 mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
            <label 
                htmlFor="name"
                className="text-lg font-semibold text-gray-700">
                    Nombre
            </label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                className="border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <p className="text-lg text-gray-700">
                    {
                        name 
                            ? 
                            `Hola, ${name}` 
                            : 
                            "Por favor, ingrese su nombre"
                    }
                </p>
        </form>
    )
}
export default SaludoJudith;