import { Header } from '../Components/Header'
import '../Css/App.css'
import { Explore } from '../Pages/Explore'
import {createContext, useState} from "react"
import { Search } from '../Pages/Search';
import { Messages } from '../Pages/Messages';
import { Notify } from '../Pages/Notify';

export const Paginas = createContext();

function App() {

  const [Pagina, setPagina] = useState("Explore");

  const ObjPaginas = {
    Explore: Explore,
    Search: Search,
    Messages: Messages,
    Notify: Notify
  }

  const PaginaActual = ObjPaginas[Pagina];

  return (
    <>
     <Paginas.Provider value={[Pagina, setPagina]}>
      <div className='pp'>
        <div className="Contenedor-App">
            <div className='Izquierda-App'>
                <Header></Header>
            </div>
            <div className='Contenido-App'>
                <PaginaActual></PaginaActual>
            </div>
        </div>
        </div>
     </Paginas.Provider>
    </>
  )
} 

export default App
