
const ProductoCard = (props) => {
    console.log(props.data)
    const { descripcion } = props.data // Desestructure descripción

    const precioCon10DeAumento = props.data.precio * 1.10

  return (
    <article className="mb-6 rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
          <h3 className="text-2xl font-bold text-white">{props.data.nombre}</h3>
          <p className="mt-3 text-gray-400">{descripcion}</p>
          <p className="mt-4 text-2xl font-black text-violet-400">Precio: {precioCon10DeAumento}</p>
          <button className="mt-6 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] active:scale-95 cursor-pointer">Comprar</button>
    </article>
  )
}

export default ProductoCard
