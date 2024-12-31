import "../Css/Programador.css"
import foto from "../Icons/Foto.jpeg"

export function Programador(){
    return(
        <div className="Contenedor-Programadores">
            <div className="Informacion-Programador">
                <img src={foto} alt="" />
                <div className="Nombre-Cargo">
                    <h2 className="Nombre">Jelias Garcia</h2>
                    <h2 className="Cargo">DEV. FRONT-END</h2>
                </div>
            </div>
            <button className="Boton-Seguir">Follow</button>
        </div>
    )
}