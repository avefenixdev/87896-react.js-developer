

const TablaFila = ({product, deleteProducto}) => { // props = { product }
  console.log(product)

  const handleBorrar = (id) => {
    deleteProducto(id)
  }

  return (
     <tr className="hover:bg-gray-50">
       <td className="px-4 py-3">{product.nombre}</td>
       <td className="px-4 py-3">{product.categoria}</td>
       <td className="px-4 py-3">${product.precio}</td>
       <td className="px-4 py-3 flex gap-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">Ver</button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Editar</button>
        <button onClick={() => handleBorrar(product.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Borrar</button>
       </td>
    </tr>
  )
}

export default TablaFila
