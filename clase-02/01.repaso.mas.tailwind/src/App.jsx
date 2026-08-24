// rafce

import Cabecera from "./components/Cabecera"
import ContenidoPrincipal from "./components/ContenidoPrincipal"
import PiePagina from "./components/PiePagina"
/* Un fragment es una etiqueta que nos permite retonar más de un elemento dentro de un componente
<Fragment></Fragement> | <></>
*/
const App = () => {
  return (
    <>
      <Cabecera />

     <ContenidoPrincipal />

      {/* footer>p{2026 - Tienda Educación IT} */}
      <PiePagina />
    </>
  )
}

// Duplicamos líneas
/* Alt + Shift + ⬇️⬆️ */
/* Ctrl + c y Ctrl + v */
export default App