import "../Css/AddPost.css"
import { FaRegImage } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";

export function AddPost(){
    return(
        <div className="Contenedor-Add-Post">
            <div className="Seleccionar-Type-Project">
                <h3>PUBLISH A NEW PROJECT</h3>
                <select name="" id="">
                    <option value="">TYPE SOFTWARE</option>
                </select>
            </div>
            <div className="Input-Agregar-Contenido">
                <input type="text" name="" id="" placeholder="What is your app about?"/>
            </div>
            <div className="Btns-Image-Post">
                <button className="Image"><FaImage className="icono"></FaImage></button>
                <button className="Post">Post</button>
            </div>
        </div>
    )
}