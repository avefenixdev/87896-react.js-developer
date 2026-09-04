import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Productos from "../pages/Productos"
import Nosotros from "../pages/Nosotros"
import ProductosDetalle from "../pages/ProductosDetalle"
import CustomHooks from "../pages/CustomHooks"
import Contexto from "../pages/Contexto"
import Hooks from "../pages/Hooks"
import Contacto from "../pages/Contacto"
import Dashboard from "../pages/Dashboard"
import NoEncontrado from "../pages/NoEncontrado"


const Rutas = () => {

   const routes = useRoutes(
    [
        {
            path: '/',
            element: <Inicio />
        },
        {
            path: '/productos',
            element: <Productos />
        },
        {
            path: '/productos/:id',
            element: <ProductosDetalle />
        },
        {
            path: '/nosotros',
            element: <Nosotros />
        },
        {
            path: '/custom-hooks',
            element: <CustomHooks />
        },
        {
            path: '/contexto',
            element: <Contexto />
        },
        {
            path: '/hooks',
            element: <Hooks />
        },
        {
            path: '/contacto',
            element: <Contacto />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '*',
            element: <NoEncontrado />
        }
    ]
   )

  return routes
}

export default Rutas