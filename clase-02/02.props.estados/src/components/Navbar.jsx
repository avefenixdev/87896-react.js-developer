//rafce

import navItems from "../constants/nav-items"

const Navbar = () => {
  return (
    <nav className="flex flex-wrap gap-3">

      {
        navItems.map((item) => (
          <a 
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition duration-300 hover:bg-violet-500/10 hover:text-violet-400"
            href={item.ruta} 
            key={item.id}>
              {item.texto}
          </a>
        ))
      }
    </nav>
  )
}

export default Navbar