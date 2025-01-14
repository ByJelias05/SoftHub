import { useState, useContext, useEffect } from "react"
import "../Css/Header.css"
import {ArrayIcons} from "../Data/ArrayIcons"

import Flecha from "../Icons/Flecha.png"
import { Paginas } from "../App/App"

import {Link} from "react-router-dom"


export function Header(){

    const [Pagina, setPagina] = useContext(Paginas)

    const [Boton, setBoton] = useState("Explore");
    const [BotonOver, setBotonOver] = useState();
    const [WidthOver, setWidthOver] = useState(null);

    const [Pasar, setPasar] = useState();

    const Leave = (titulo) =>{
        const direccion = titulo.includes(" ") ? titulo.replace(" ", "") : titulo
        window.location = direccion
        setBotonOver(direccion)

    }

    const [Vista, setVista] = useState("")
    useEffect(() =>{
        setVista(location.pathname.replace("/",""))
    
    })

    return(
        <div className="Contenedor-Header" onPointerLeave={Leave} >
            {
                ArrayIcons.map(items => (
                    BotonOver == items.Titu ?
                    <a className={`AddWidth conte`}  
                    onClick={() => {
                        setBoton(items.Titu)
                        setPagina(items.Titu)
                    }}
                    onMouseOver={() => {
                    setBotonOver(items.Titu)
                    }}
                    onPointerLeave={() =>{
                       
                            setBotonOver("")
                       
                    }}
                    href={items.Titu}
                    >

                        {/* Elimna los bordes del boton seleccionado */}
                        {
                            Vista == items.Titu ?
                            <div className="Icono-Header" style={{border: 'none'}}>

                                {/* Carga los iconos Loaded del boton seleccionado */}
                            {
                                Vista == items.Titu ?
                                Vista != "MyPerfil" ?
                                    <div className="Img-Load" onClick={() => alert("ddo")}>
                                        <img src={items.IconLoad} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img" onClick={() => {alert("sqw")}}>
                                    <img className="Perfil"  src={items.Icon} alt="" />
                                </div>

                                :

                                Vista != "My Perfil" ?
                                    <div className="Img">
                                        <img src={items.Icon} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="Perfil" src={items.Icon} alt="" />
                                </div>
                                   
                            }
                        </div>
                        :
                        <div className="Icono-Header">
                            {
                                BotonOver == items.Titu ?
                                items.Titu != "My Perfil" ?
                                    <div className="Img-Load" >
                                        <img src={items.IconLoad} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="Perfil" src={items.Icon} alt="" />
                                </div>

                                :

                                items.Titu != "MyPerfil" ?
                                    <div className="Img">
                                        <img src={items.Icon} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="Perfil" src={items.Icon} alt="" />
                                </div>
                                   
                            }
                        </div>
                        }

                        {/* Muestra la flecha y nombre del boton seleccionado */}
                        
                        {
                            Vista == items.Titu ?
                            <div className="Titulo"  onClick={() => alert("dd")}>
                                <img className="Flecha" src={Flecha} alt="" />
                                <h1>{items.Titulo}</h1>
                            </div>
                            :
                            null
                        }
                          
                    </a>


                    :


                    <div className={`Boton-Header conte`}  
                    onClick={() => {setBoton(items.Titu)}}
                    onMouseOver={() => {
                        setBotonOver(items.Titu)
                        
                    }}
                    
                    >

                        {/* Elimna los bordes del boton seleccionado */}
                        {
                            Vista == items.Titu ?
                            <div className="Icono-Header" style={{border: 'none'}}>

                                {/* Carga los iconos Loaded del boton seleccionado */}
                            {
                                Vista == items.Titu ?
                                Vista != "MyPerfil" ?
                                    <div className="Img-Load" >
                                        <img src={items.IconLoad} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="perfil"  src={items.Icon} alt="" />
                                </div>

                                :

                                items.Titu != "My Perfil" ?
                                    <div className="Img">
                                        <img src={items.Icon} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="Perfil" src={items.Icon} alt="" />
                                </div>
                                   
                            }
                        </div>
                        
                        :

                        <div className="Icono-Header db">
                            {
                                Vista == items.Titu ?
                                items.Titu != "MyPerfil" ?
                                    <div className="Img-Load">
                                        <img src={items.IconLoad} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img" >
                                    <img className="Perfil" src={items.Icon} alt="" />
                                </div>

                                :

                                items.Titu != "MyPerfil" ?
                                    <div className="Img">
                                        <img src={items.Icon} alt="" />
                                    </div>
                                :
                                    
                                <div className="Img">
                                    <img className="Perfil" src={items.Icon} alt="" />
                                </div>
                                   
                            }
                        </div>
                        }

                        {/* Muestra la flecha y nombre del boton seleccionado */}
                        
                        {
                            Vista == items.Titu ?
                            <div className="Titulo" style={{width: '100%'}} onClick={() => alert("dd")}>
                                <img className="Flecha" src={Flecha} alt="" />
                                <h1 style={{}}>{items.Titulo}</h1>
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