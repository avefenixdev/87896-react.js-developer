import Contador from "../components/Contador"
import ContadorHook from "../components/ContadorHook"
import useTitulo from "../hooks/useTitulo"

const CustomHooks = () => {

  useTitulo('Custom Hooks')

  return (
    <>
      <h1>Custom Hooks (Ganchos personalizados)</h1>
      <hr />

      {/* ! Sin hooks personalizado */}
      <Contador valorInicial={22} />

      <hr className="my-4" />

      {/* ! Con hooks personalizado */}
      <ContadorHook valorInicial={22} />

    </>
  )
}

export default CustomHooks