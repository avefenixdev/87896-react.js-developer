import { useEffect } from "react"


const useTitulo = (title) => {

    useEffect(() => {
          document.title = `Educación IT - ${title}`
    }, [title])

}

export default useTitulo