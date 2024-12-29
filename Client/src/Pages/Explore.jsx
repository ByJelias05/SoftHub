import { Publicacion } from "../Components/Publicacion"
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
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}