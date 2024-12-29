import { Header } from '../Components/Header'
import '../Css/App.css'
import { Explore } from '../Pages/Explore'

function App() {

  return (
    <>
      <div className='pp'>
      <div className="Contenedor-App">
          <div className='Izquierda-App'>
              <Header></Header>
          </div>
          <div className='Contenido-App'>
              <Explore></Explore>
          </div>
      </div>
      </div>
    </>
  )
}

export default App
