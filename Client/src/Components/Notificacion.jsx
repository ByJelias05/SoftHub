import MeGusta from "../Icons/Heart.png"
import Foto from "../Icons/Foto.jpeg"
import "../Css/Notificacion.css"

export function Notificacion(){
    return(
        <div className="Contenedor-Notificacion">
            <div className="Foto-Informacion-Noticaciones">
                <img src={Foto} alt="" />
                <div className="Nombre-Accion">
                    <h1>Jelias Garcia</h1>
                    <span>Le gusto tu publicación.</span>
                </div>
            </div>
            <img className="Icono-Accion" src={MeGusta} alt="" />
        </div>
    )
}