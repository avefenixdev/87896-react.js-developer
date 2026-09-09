import { useDispatch, useSelector } from "react-redux"
import { getProductos } from "../store/slices/productos/productos-slice"
import { useEffect } from "react"
import Spinner from "./Spinner"

const Productos = () => {
    
    const dispatch = useDispatch()
    /* useSelector(store => {
        console.log(store)
        console.log(store.productos) // { productos, error, loading }
    }) */
    const { productos, loading } = useSelector(store => store.productos)// { productos, error, loading }
    //console.log(productos) // productos: []

    useEffect(() => {
      dispatch(getProductos()) // el dispatch se hace cuando el componente se monte
    }, [dispatch])
    

    const handlerObtenerProductos = () => {
        dispatch(getProductos()) // dispatch de la acción thunks  
    }

  return (
    <>
        <h4>Listado de productos</h4>
        <hr />

        <button 
            onClick={handlerObtenerProductos}
            className="bg-green-500 text-white mt-4 py-2 px-4 cursor-pointer rounded hover:bg-green-700">
                Obtener productos
        </button>

        { !loading 
            ?        
               (
                    <ul>
                        {
                            productos && productos.map(producto => (
                                <li key={producto.id}>{producto.title} | { producto.brand} | {producto.category} | {producto.price} </li>
                            ))
                        }
                    </ul>
                )
            :
                (<Spinner />)
        }

      

    </>
  )
}

export default Productos