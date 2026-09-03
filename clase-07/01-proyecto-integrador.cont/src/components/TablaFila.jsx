import Swal from 'sweetalert2'


const TablaFila = ({product, deleteProducto}) => { // props = { product }
  //console.log(product)

  const handleBorrar = (id) => {

    Swal.fire({
      title: "¿Estás seguro de que querés borrar el producto?",
      text: "No vas a poder recuperar el producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si papá, borralo!",
      cancelButtonText: "Nooooo, no me quemes!",
    }).then((result) => {
      if (result.isConfirmed) {
          deleteProducto(id)
          Swal.fire({
            title: "¡Borrado!",
            text: "El producto fue borrado",
            icon: "success"
          });
      }
    });


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
