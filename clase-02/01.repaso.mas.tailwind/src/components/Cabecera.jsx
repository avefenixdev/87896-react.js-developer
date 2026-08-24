//rafce

import Navbar from "./Navbar"

const Cabecera = () => {
  return (
    <header className="border-b border-violet-500/20 bg-black/40 px-6 py-6 backdrop-blur-xl">
      <h1 className ="text-3xl font-black tracking-tight text-white md:text-4xl">Tienda
        <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Educación IT
        </span>
         
      </h1>
      <hr className="my-6 border-violet-500/20" />

      <Navbar />
    </header>
  )
}

export default Cabecera