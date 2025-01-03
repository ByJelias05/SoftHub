import { Notificacion } from "../Components/Notificacion"
import { Publicacion } from "../Components/Publicacion"
import "../Css/Notify.css"
import Logo from "../Images/Logo.png"

export function Notify(){
    return(
        <div className="Contenedor-Notify">
            <div className="Logo-Publicaciones">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="Publicaciones">
                    <Publicacion></Publicacion>
                    <Publicacion></Publicacion>
                </div>
            </div>
            <div className="Notificaciones">
                <div className="Lista-Notificaciones">
                    <h1 className="Titulo">Notifications</h1>
                    <Notificacion></Notificacion>
                    <Notificacion></Notificacion>
                    <Notificacion></Notificacion>
                </div>
            </div>
        </div>
    )
}