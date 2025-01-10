import { ImagesPropuesta } from "../Data/ArrayImages"
import { useEffect, useState } from "react"
import "../Css/ImagenesPropuesta.css"

export function ImagenesPropuesta(){

    const [Imagenes, setImagenes] = useState([]);

    useEffect(() =>{
        setImagenes(ImagesPropuesta)
    })

    return(
        <div className="Contenedor-Imagenes_Propuestas">
            {
                Imagenes.map(items => (
                    <img src={items.image} alt="" />
                ))
            }
        </div>
    )
}