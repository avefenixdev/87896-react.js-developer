import { useDispatch, useSelector } from "react-redux"

const Productos = () => {

    /* useSelector(store => {
        console.log(store)
        console.log(store.productos) // { productos, error, loading }
    }) */
    const { productos } = useSelector(store => store.productos)// { productos, error, loading }
    console.log(productos) // productos: []

    const dispatch = useDispatch()

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

    </>
  )
}

export default Productos