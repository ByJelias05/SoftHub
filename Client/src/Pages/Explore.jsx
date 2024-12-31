import { Buscador } from "../Components/Buscador"
import { Publicacion } from "../Components/Publicacion"
import { Sugerencia } from "../Components/Sugerencia"
import { Tendencias } from "../Components/Tendencias"
import "../Css/Explore.css"
import Logo from "../Images/Logo.png"

export function Explore(){
    return(
        <div className="Contenedor-Explore">
            <div className="Logo-Publicaciones">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="Publicaciones">
                    <Publicacion></Publicacion>
                    <Publicacion></Publicacion>
                </div>
            </div>
            <div className="Buscar-Devs-Tendencias">
                <div className="Buscador">
                    <Buscador></Buscador>
                </div>
                <div className="Devs-Recomendaciones">
                    <Sugerencia></Sugerencia>
                </div>
                <div className="Tendencias">
                    <Tendencias></Tendencias>
                </div>
            </div>
        </div>
    )
}