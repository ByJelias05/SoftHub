import { MdOutlineSearch } from "react-icons/md";
import "../Css/Buscador.css"

export function Buscador(){
    return(
        <div className="Contenedor-Buscador">
            <MdOutlineSearch className="Icono-Buscar"></MdOutlineSearch>
            <input type="text" placeholder="Search..."/>
        </div>
    )
} 