import './Footer.css'

//rafce

const Footer = (props) => { 
  console.log(props) // props = { texto }

  return (
    <footer className="tamanio-mediano">
        { props.texto }
    </footer>
  )
}

export default Footer

