//rafce

import navItems from "../constants/nav-items"

const Navbar = () => {
  return (
    <nav>

      {
        navItems.map((item) => (
          <a href={item.ruta} key={item.id}>{item.texto}</a>
        ))
      }
    </nav>
  )
}

export default Navbar