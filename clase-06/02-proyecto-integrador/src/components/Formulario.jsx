
const Formulario = () => {
  return (
     <>
      <h2 className="text-2xl font-black text-blue-600 mb-3">Formulario de carga y edición</h2>
      <form className="border border-blue-500 rounded-2xl w-full max-w-md px-6 py-4 mb-10">
        {/* Campo nombre */}
        <div className="mb-4">
          <label htmlFor="lbl-nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input type="text" id="lbl-nombre" className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        {/* Campo categoría */}
        <div className="mb-4">
          <label htmlFor="lbl-categoria"  className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
          <input type="text" id="lbl-categoria" className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        {/* Campo precio */}
        <div className="mb-4">
          <label htmlFor="lbl-precio"  className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
          <input type="text" id="lbl-precio" className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        {/* Botones */}
        <div className="mb-4 flex gap-3">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">Cargar o Editar</button>
          <button type="reset" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer">Reiniciar</button>
        </div>
      </form>
    </>
  )
}

export default Formulario
