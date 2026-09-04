import { createContext, useState } from 'react';

// ! 1. Crear contexto
const ContadorContext = createContext()

// 2. Crear el provider que es una función que recibe children
const ContadorProvider = ({ children }) => {

    const [contador, setContador] = useState(55)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }
    // Lo quiero el contexto proveea a los componentes lo paso por la props 'value'
    const data = { contador, incrementar, decrementar }

    return <ContadorContext.Provider value={data}>
        {children}
    </ContadorContext.Provider>

}

// 3. Exportar como módulo
export { ContadorProvider }

export default ContadorContext // define cual es la funcionalidad principal
