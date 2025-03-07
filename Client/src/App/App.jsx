import { Header } from '../Components/Header'
import '../Css/App.css'
import { Explore } from '../Pages/Explore'
import {createContext, useState} from "react"
import { Search } from '../Pages/Search';
import { Messages } from '../Pages/Messages';
import { Notify } from '../Pages/Notify';
import { MyPanel } from '../Pages/MyPanel';
import { NewPost } from '../Pages/NewPost';
import { Activities } from '../Pages/Activities';
import { Ruta } from '../Routes/Ruta';

export const Paginas = createContext();

function App() {

  const [Pagina, setPagina] = useState("Explore");

  const ObjPaginas = {
    Explore: Explore,
    Search: Search,
    Messages: Messages,
    Notify: Notify,
    Mypanel: MyPanel,
    NewPost: NewPost,
    Activities: Activities
  }

  const PaginaActual = ObjPaginas[Pagina.includes(" ") ? Pagina.replace(" ","") : Pagina];

  return (
    <>
     <Paginas.Provider value={[Pagina, setPagina]}>
      <div className='pp'>
        <div className="Contenedor-App">
            <div className='Izquierda-App'>
                <Header></Header>
            </div>
            <div className='Contenido-App'>
                <Ruta/>
            </div>
        </div>
        </div>
     </Paginas.Provider>
    </>
  )
} 

export default App
