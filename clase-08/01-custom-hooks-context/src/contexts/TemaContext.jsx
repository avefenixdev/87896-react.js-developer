import { createContext, useState } from 'react'

const TemaContext = createContext()

const TemaProvider = ( { children } ) => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleTema = () => {
        setDarkMode(!darkMode)
    }


    const data = {
        darkMode,
        toggleTema
    }

    return <TemaContext.Provider value={data}>{ children }</TemaContext.Provider>
}

export { TemaProvider }
export default TemaContext
