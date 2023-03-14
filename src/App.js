import './App.css';
import OpcionesCompra from './Componentes/OpcionesCompra';
import TarjetaPlan from './Componentes/TarjetaPlan';

function App() {
  return (
    <div className="contenedor">
      <h2 className='titulo'>Our Pricing</h2>
      <OpcionesCompra/>
      <article className='contenedor-tarjetas-plan'>
        <section className='contenedor-tarjeta-basic'>
          <TarjetaPlan
            tipoPlan='Basic'
            precio='19.99'
            capacidad='500 GB'
            usuarios='2'
            capacidadEnvios='3 GB'
            borderRadiusRight='0'
          />
        </section>
        <section className='contenedor-tarjeta-profesional'>
          <TarjetaPlan
            tipoPlan='Professional'
            precio='24.99'
            capacidad='1 TB'
            usuarios='5'
            capacidadEnvios='10 GB'
            backgroundColor='linear-gradient(100deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%))'
            color='white'
            borde='none'
            letraBoton= 'hsl(237, 63%, 64%)'
          />
        </section>
        <section className='contenedor-tarjeta-master'>
          <TarjetaPlan
            tipoPlan='Master'
            precio='39.99'
            capacidad='2 TB'
            usuarios='10'
            capacidadEnvios='20 GB'
            borderRadiusLeft='0'
          />
        </section>
      </article>
    </div>
  );
}

export default App;
