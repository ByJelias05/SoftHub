import { AddPost } from "../Components/AddPost"
import { Buscador } from "../Components/Buscador"
import { Publicacion } from "../Components/Publicacion"
import { Sugerencia } from "../Components/Sugerencia"
import { Tendencias } from "../Components/Tendencias"
import "../Css/NewPost.css"
import Logo from "../Images/Logo.png"

export function NewPost(){
    return(
        <div className="Contenedor-NewPost">
            <div className="Logo-Agregar-Publicaciones">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="Agregar-Publicacion">
                    <div className="Agregar-Nueva-Publicacion">
                        <AddPost></AddPost>
                    </div>
                    <div className="Publicaciones">
                        <Publicacion></Publicacion>
                        <Publicacion></Publicacion>
                    </div>
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