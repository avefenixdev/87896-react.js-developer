// rafce

const Padre = (props) => { // props = { children }
  console.log(props) // { children }
  return (
    <section>{props.children}</section>
  )
}

export default Padre