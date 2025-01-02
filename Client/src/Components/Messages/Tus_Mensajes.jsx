import foto from "../../Icons/Foto.jpeg"
import "../../Css/UsersMessages.css"

export function Tus_Mensaje(){
    return(
        <div className="Contenedor-Tus_Mensaje">
            <div className="Foto">
                <img src={foto} alt="" />
            </div>
            <div className="Perfil-Mensaje">
                <h3>React Dominicana</h3>
                <p>Waoo que buen proyecto! <br></br> 
                ¿Quién será el afortunado? 😁</p>
            </div>
        </div>
    )
}