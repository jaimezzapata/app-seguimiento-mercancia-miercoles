import MenuLateral from './MenuLateral';
import './PanelControl.css';
const PanelControl = () => {
  return (
    <section className="panel-control">
      <MenuLateral />
      <section className='panel-control-section'>
        <div className='panel-control-card'>
          <section></section>
          <section>
            <p>Ver</p>
          </section>
        </div>
        <div className='panel-control-card'>
          <section></section>
          <section>
            <p>Ver</p>
          </section>
        </div>
        <div className='panel-control-card'>
          <section></section>
          <section>
            <p>Ver</p>
          </section>
        </div>
      </section>
    </section>
  )
}

export default PanelControl;