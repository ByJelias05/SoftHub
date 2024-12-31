import { useState, useContext } from "react"
import "../Css/Header.css"
import {ArrayIcons} from "../Data/ArrayIcons"

import Flecha from "../Icons/Flecha.png"
import { Paginas } from "../App/App"


export function Header(){

    const [Pagina, setPagina] = useContext(Paginas)

    const [Boton, setBoton] = useState("Explore");
    const [BotonOver, setBotonOver] = useState(Boton);
    const [WidthOver, setWidthOver] = useState(null);

    const Leave = () =>{
        setBotonOver(Boton)
    }

    return(
        <div className="Contenedor-Header" onPointerLeave={Leave} >
            {
                ArrayIcons.map(items => (
                    BotonOver == items.Titulo ?
                    <div className={`AddWidth`}  
                    onClick={() => {
                        setBoton(items.Titulo)
                        setPagina(items.Titulo)
                    }}
                    onMouseOver={() => {
                    setBotonOver(items.Titulo)
                    }}
                    
                    >

                        {/* Elimna los bordes del boton seleccionado */}
                        {
                            BotonOver == items.Titulo ?
                            <div className="Icono-Header" style={{border: 'none'}}>

                                {/* Carga los iconos Loaded del boton seleccionado */}
                            {
                                BotonOver == items.Titulo ?
                                items.Titulo != "My Perfil" ?
                                    <div className="Img-Load" >
                                        <img src={items.IconLoad} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="peril" src={items.Icon} alt="" />
                                </div>

                                :

                                items.Titulo != "My Perfil" ?
                                    <div className="Img">
                                        <img src={items.Icon} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="peril" src={items.Icon} alt="" />
                                </div>
                                   
                            }
                        </div>
                        :
                        <div className="Icono-Header">
                            {
                                BotonOver == items.Titulo ?
                                items.Titulo != "My Perfil" ?
                                    <div className="Img-Load">
                                        <img src={items.IconLoad} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="peril" src={items.Icon} alt="" />
                                </div>

                                :

                                items.Titulo != "My Perfil" ?
                                    <div className="Img">
                                        <img src={items.Icon} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="peril" src={items.Icon} alt="" />
                                </div>
                                   
                            }
                        </div>
                        }

                        {/* Muestra la flecha y nombre del boton seleccionado */}
                        {
                            BotonOver == items.Titulo ?
                            <div className="Titulo">
                                <img className="Flecha" src={Flecha} alt="" />
                                <h1>{items.Titulo}</h1>
                            </div>
                            :
                            null
                        }
                    </div>


                    :


                    <div className={`Boton-Header`}  
                    onClick={() => {setBoton(items.Titulo)}}
                    onMouseOver={() => {
                        setBotonOver(items.Titulo)
                        
                    }}
                    
                    >

                        {/* Elimna los bordes del boton seleccionado */}
                        {
                            BotonOver == items.Titulo ?
                            <div className="Icono-Header" style={{border: 'none'}}>

                                {/* Carga los iconos Loaded del boton seleccionado */}
                            {
                                BotonOver == items.Titulo ?
                                items.Titulo != "My Perfil" ?
                                    <div className="Img-Load" >
                                        <img src={items.IconLoad} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="peril" src={items.Icon} alt="" />
                                </div>

                                :

                                items.Titulo != "My Perfil" ?
                                    <div className="Img">
                                        <img src={items.Icon} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="peril" src={items.Icon} alt="" />
                                </div>
                                   
                            }
                        </div>
                        :
                        <div className="Icono-Header">
                            {
                                BotonOver == items.Titulo ?
                                items.Titulo != "My Perfil" ?
                                    <div className="Img-Load">
                                        <img src={items.IconLoad} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="peril" src={items.Icon} alt="" />
                                </div>

                                :

                                items.Titulo != "My Perfil" ?
                                    <div className="Img">
                                        <img src={items.Icon} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="peril" src={items.Icon} alt="" />
                                </div>
                                   
                            }
                        </div>
                        }

                        {/* Muestra la flecha y nombre del boton seleccionado */}
                        {
                            BotonOver == items.Titulo ?
                            <div className="Titulo">
                                <img className="Flecha" src={Flecha} alt="" />
                                <h1>{items.Titulo}</h1>
                            </div>
                            :
                            null
                        }
                    </div>
                ))
            }
        </div>
    )
}