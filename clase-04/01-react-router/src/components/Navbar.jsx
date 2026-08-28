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
 
  const colorearLinks = ({isActive}) => isActive ? {color: 'red'} : {color:'blue'}

  //const objetoDeEstilo = { color: 'violet', padding: '20px', margin: '50px' }

  return (
    <nav>
        {/* <NavLink style={{ color: 'violet', padding: '20px', margin: '50px' }} to="/">Inicio</NavLink> */}
        {/*  <NavLink style={objetoDeEstilo} to="/">Inicio</NavLink> */}
        <NavLink style={colorearLinks} to="/">Inicio</NavLink>
        <NavLink style={colorearLinks} to="/productos">Productos</NavLink>
        <NavLink style={colorearLinks} to="/nosotros">Nosotros</NavLink>
        <NavLink style={colorearLinks} to="/contacto">Contacto</NavLink>
    </nav>
  )
}

export default Navbar
