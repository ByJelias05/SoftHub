import foto from "../../Icons/Foto.jpeg"
import "../../Css/UsersMessages.css"

export function Mi_Mensaje(){
    return(
        <div className="Contenedor-Mi_Mensaje">
            <div className="Perfil-Mensaje">
                <h3>Me</h3>
                <p>Waoo que buen proyecto! <br></br> 
                ¿Quién será el afortunado? 😁</p>
            </div>
            <div className="Foto">
                <img src={foto} alt="" />
            </div>
        </div>
    )
}