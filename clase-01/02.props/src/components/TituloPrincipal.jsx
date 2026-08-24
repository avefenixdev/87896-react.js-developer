import './TituloPrincipal.css'
// Un componente en React es una función
// Un componente no trabaja con HTML -> Es JSX -> Extensión de Javascript -> Una sintaxis nueva que se incoporó con React para construir dinamicamente HTML.
function TituloPrincipal(props) {
    console.log(props) // { titulo: 'Mi primera... '}
    const { titulo } = props // desestructuramos título
    return (
        <h1 className="color-verde">{ titulo }</h1>
    )
}

export default TituloPrincipal