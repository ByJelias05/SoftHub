import "../Css/Items.css"
import foto from "../Icons/Foto.jpeg"

export function Items_Propuesta(){
    return(
        <div className="Contenedor-Propuesta">
            <div className="Foto-Nombre">
                <img src={foto} alt="" />
                <h3>Hallax Soft Solutions.</h3>
            </div>
            <h3 className="Status">Proposed</h3>
        </div>
    )
}