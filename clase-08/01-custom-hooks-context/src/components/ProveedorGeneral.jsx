import { ContadorProvider } from "../contexts/ContadorContext"
import { TemaProvider } from "../contexts/TemaContext"

const ProveedorGeneral = ({ children }) => {
  return (
    <ContadorProvider>
        <TemaProvider>
            {children}
        </TemaProvider>
    </ContadorProvider>
  )
}

export default ProveedorGeneral