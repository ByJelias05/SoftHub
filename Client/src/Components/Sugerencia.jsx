import { Programador } from "./Programador";
import "../Css/Sugerencia.css"

export function Sugerencia(){
    return(
        <div className="Contenedor-Sugerencia">
            <h1>Programmer suggestion</h1>
            <div className="Programadores-Sugeridos">
                 <Programador></Programador>
                 <Programador></Programador>
                 <Programador></Programador>
                 <Programador></Programador>
                 <Programador></Programador>
                 <Programador></Programador>
                 <Programador></Programador>
                 <Programador></Programador>
            </div>
        </div>
    )
}