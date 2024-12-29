import "../Css/Publicacion.css"
import IconFoto from "../Icons/Foto.jpeg"

import { FaRegHeart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

import { FaRegComment } from "react-icons/fa";

export function Publicacion(){
    return(
        <div className="Contenedor-Publicacion">
            <div className="Detalles-Publicacion">
                <div className="Header-Publicacion">
                    <span className="TipoApp">#Inventario</span>
                    <span className="Fecha">18/12/2024</span>
                </div>
                <div className="Contenido-Publicacion">
                    <p>
                        Saludos cordiales a todos,<br></br>Necesito un software que gestione todo el inventario de una ferretería.
                    </p>
                </div>
                <div className="Footer-Publicacion">
                    <div className="Hecho-Por">
                        <h5>By<img src={IconFoto} alt="" />Gianni Company</h5>
                    </div>
                    <button>See more</button>
                </div>
            </div>
            <div className="Interaccion-Comentarios">
                <div className="Interaccion">
                    <div className="MeGustas-Comentarios">
                        <div className="MeGustas">
                            <FaRegHeart className="Iconos-Publicacion"/>
                            <span className="Cantidad">25</span>
                        </div>
                        <div className="Comentarios">
                            <FaRegComment className="Iconos-Publicacion"/>
                            <span className="Cantidad">5</span>
                        </div>
                    </div>
                    <div className="Proponer">
                        <button onClick={() => alert("klk")}>Propose</button>
                        <span>3</span>
                    </div>
                </div>
                <div className="Comentarios-Publicacion">
                    <div className="Ultimo-Comentario">
                        <h5><img src={IconFoto} alt=""/>Waoo que buen proyecto! ¿Quién será el
                        afortunado? 😁</h5>
                    </div>
                    <input className="Agregar-Comentario" placeholder="Write comment..." type="text" />
                </div>
            </div>
        </div>
    )
}