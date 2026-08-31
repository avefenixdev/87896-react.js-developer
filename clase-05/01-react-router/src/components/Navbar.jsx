import { NavLink } from "react-router"
import navItems from "../constants/nav-items"

const Navbar = () => {

  const colorearLinks = ({ isActive }) => isActive ? { color: 'red' } : { color: 'blue' }

  return (
    <nav className="flex items-center justify-center gap-1 border-b border-violet-500/20 bg-slate-950 p-4">
     

      {
        navItems.map(item => (
          <NavLink
            className="rounded-md px-4 py-2 text-sm font-semibold text-slate-400 transition-all duration-300 hover:bg-violet-500/10 hover:text-violet-400"
            style={colorearLinks}
            to={item.ruta}
            key={item.id}
          >
            {item.nombre}
          </NavLink>
        ))
      }

    </nav>
  )
}

export default Navbar
