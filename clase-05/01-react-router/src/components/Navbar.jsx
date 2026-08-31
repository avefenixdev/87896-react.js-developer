import { NavLink } from "react-router"

const Navbar = () => {

  /* const colorearLinks = (props) => {
    if (props.isActive) {
        return {color: 'red'}
    } else
        return {color:'blue'}
  } */

  /* const colorearLinks = ({isActive}) => {
    return isActive ? {color: 'red'} : {color:'blue'}
  } */

  const colorearLinks = ({ isActive }) => isActive ? { color: 'red' } : { color: 'blue' }

  //const objetoDeEstilo = { color: 'violet', padding: '20px', margin: '50px' }

  return (
    <nav className="flex items-center justify-center gap-1 border-b border-violet-500/20 bg-slate-950 p-4">
      {/* <NavLink style={{ color: 'violet', padding: '20px', margin: '50px' }} to="/">Inicio</NavLink> */}
      {/*  <NavLink style={objetoDeEstilo} to="/">Inicio</NavLink> */}
      <NavLink
        className="rounded-md px-4 py-2 text-sm font-semibold text-slate-400 transition-all duration-300 hover:bg-violet-500/10 hover:text-violet-400"
        style={colorearLinks}
        to="/"
      >
        Inicio
      </NavLink>

      <NavLink
        className="rounded-md px-4 py-2 text-sm font-semibold text-slate-400 transition-all duration-300 hover:bg-violet-500/10 hover:text-violet-400"
        style={colorearLinks}
        to="/productos"
      >
        Productos
      </NavLink>

      <NavLink
        className="rounded-md px-4 py-2 text-sm font-semibold text-slate-400 transition-all duration-300 hover:bg-violet-500/10 hover:text-violet-400"
        style={colorearLinks}
        to="/nosotros"
      >
        Nosotros
      </NavLink>

      <NavLink
        className="rounded-md px-4 py-2 text-sm font-semibold text-slate-400 transition-all duration-300 hover:bg-violet-500/10 hover:text-violet-400"
        style={colorearLinks}
        to="/contacto"
      >
        Contacto
      </NavLink>
    </nav>
  )
}

export default Navbar
