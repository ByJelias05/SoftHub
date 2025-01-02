import { Buscador } from "../Components/Buscador"
import { Mi_Mensaje } from "../Components/Messages/Mi_Mensajes"
import { UsuarioPrevio } from "../Components/Messages/UsuarioPrevio"
import "../Css/Messages.css"
import Logo from "../Images/Logo.png"
import foto from "../Icons/Foto.jpeg"
import online from "../Icons/Online.png"
import Enviar from "../Icons/Send.png"
import { Tus_Mensaje } from "../Components/Messages/Tus_Mensajes"

export function Messages(){
    return(
        <div className="Contenedor-Messages">
           <div className="Logo-Amigos">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="Buscador-Amigos">
                    <Buscador></Buscador>
                    <div className="Contenedor-Amigos">
                        <UsuarioPrevio></UsuarioPrevio>
                        <UsuarioPrevio></UsuarioPrevio>
                        <UsuarioPrevio></UsuarioPrevio>
                        <UsuarioPrevio></UsuarioPrevio>
                        <UsuarioPrevio></UsuarioPrevio>
                        <UsuarioPrevio></UsuarioPrevio>
                    </div>
                </div>
           </div>
           <div className="Conversacion-Messages">
                <div className="Perfil-Messages">
                    <div className="Foto">
                        <img src={foto} alt="" />
                    </div>
                    <div className="Nombre">
                        <h1>React Dominicana</h1>
                    </div>
                </div>
                <div className="Caja-Conversacion">
                    <div className="Mis-M">
                        <Mi_Mensaje></Mi_Mensaje>
                    </div>
                    <div className="Tus-M">
                        <Tus_Mensaje></Tus_Mensaje>
                    </div>
                    <div className="Mis-M">
                        <Mi_Mensaje></Mi_Mensaje>
                    </div>
                    <div className="Tus-M">
                        <Tus_Mensaje></Tus_Mensaje>
                    </div>
                    <div className="Mis-M">
                        <Mi_Mensaje></Mi_Mensaje>
                    </div>
                    <div className="Tus-M">
                        <Tus_Mensaje></Tus_Mensaje>
                    </div>
                </div>
                <div className="Escribir-Mensaje">
                    <input type="text" placeholder="Write message..."/>
                    <button><img src={Enviar} alt="" /></button>
                </div>
           </div>
        </div>
    )
}