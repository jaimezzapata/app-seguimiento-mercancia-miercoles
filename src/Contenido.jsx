import Card from "./Card"
import clientes from "./database"
function Contenido() {

  return (
    <section className='panel-control-section'>
      {
        clientes.map((cliente) => {
          return <Card />
        })
      }
    </section>
  )
}

export default Contenido