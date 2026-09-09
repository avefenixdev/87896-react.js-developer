import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Redux from "../pages/Redux"
import Productos from "../pages/Productos"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"

const Rutas = () => {

  const rutas = useRoutes(
    [
        {
            path: '/',
            element: <Inicio />
        },
        {
            path: '/redux',
            element: <Redux />
        },
        {
            path: '/productos',
            element: <Productos />
        },
        {
            path: '/nosotros',
            element: <Nosotros />
        },
        {
            path: '/contacto',
            element: <Contacto />
        },
        {
            path: '*',
            element: <NoEncontrado />
        }
    ]
  )

  return rutas
}

export default Rutas