import Card from "./Card"
import Hijo from "./Hijo"
import Padre from "./Padre"

const Contenedor = () => {
  return (
    <>
    <Padre>
        <div>
            <Hijo />
        </div>
    </Padre>

    <Card>
      <h2>Título del primer post</h2>
      <p>Este es el cuerpo de texto del post</p>
    </Card>
    <Card>
      <h2>Título del segundo post</h2>
      <p>Este es el cuerpo de texto del 2do post</p>
      <p>Este es el 2do cuerpo de texto del 2do post</p>
    </Card>
    </>
  )
}

export default Contenedor