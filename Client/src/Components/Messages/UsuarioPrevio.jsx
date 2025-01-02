import foto from "../../Icons/Foto.jpeg"
import online from "../../Icons/Online.png"
import ofline from "../../Icons/Ofline.png"

import "../../Css/UsersMessages.css"

export function UsuarioPrevio(){
    return(
        <div className="Contenedor-UsuarioPrevio">
            <div className="Foto">
                <img src={foto} alt="" />
            </div>
            <div className="Informacion-Mensaje">
                <div className="Nombre-Estado">
                    <div className="Nombre">
                        <h1>Jelias Garcia</h1>
                    </div>
                    <div className="Estado">
                        <img src={online} alt="" />
                    </div>
                </div>
                <div className="Ultimo-Mensaje">
                    <p>Waoo que buen proyecto! ¿Quién será <br></br>
                    el afortunado? 😁</p>
                </div>
            </div>
        </div>
    )
}