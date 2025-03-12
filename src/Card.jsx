function Card({ cliente, ciudad }) {
  return (
    <div className='panel-control-card'>
      <section>
        <p>Cliente: {cliente}</p>
        <p>Ciudad: {ciudad}</p>
      </section>
      <section>
        <p>Ver</p>
      </section>
    </div>
  )
}

export default Card