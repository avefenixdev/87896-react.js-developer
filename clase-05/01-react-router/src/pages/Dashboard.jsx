import { useNavigate } from "react-router"

const Dashboard = () => {

    const navigate = useNavigate()

    const volverAtras = () => {
        navigate(-1)
    }

  return (
    <>
        <h1 className="text-4xl font-bold text-gray-900">Dashboard de Producto</h1>
        <p>Zona de alta, baja y modificación de productos</p>

        <button 
          onClick={volverAtras}
          className="mt-3 bg-amber-600 hover:bg-amber-800 py-2 px-4 rounded cursor-pointer text-white"
        >
          Volver atrás
        </button>
    
    </>
  )
}

export default Dashboard