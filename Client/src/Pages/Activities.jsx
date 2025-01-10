import { IA } from "../Components/IA"
import { Items_Propuesta } from "../Components/Items_Propuesta"
import "../Css/Activities.css"
import Logo from "../Images/Logo.png"
import foto from "../Icons/Foto.jpeg"
import { ImagenesPropuesta } from "../Components/ImagenesPropuesta"

import Aceptar from "../Icons/Aceptar.png"
import Cancelar from "../Icons/Cancelar.png"
import Comentar from "../Icons/Comentar.png"

export function Activities(){
    return(
        <div className="Contenedor-Activities">
            <div className="Logo-Propuestas">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="Propuestas">
                    <div className="Elejir-App">
                        <div className="Label-Select">
                            <label htmlFor="">CHOOSE THE APP</label>
                            <select name="" id="">
                                <option value="">LOLY CLOTH</option>
                            </select>
                        </div>
                    </div>
                    <div className="Lista-Propuestas">
                        <h1>All proposals of <span>LOLY CLOTH</span></h1>
                        <div className="Items">
                            <Items_Propuesta></Items_Propuesta>
                            <Items_Propuesta></Items_Propuesta>
                        </div>
                    </div>
                    <div className="Inteligencia-Artificial">
                        <IA></IA>
                    </div>
                </div>
            </div>
            <div className="Propuestas-Enviadas">
                <div className="Titulo-Propuesta-Enviada">
                    <h3>PROPOSAL MADE </h3>
                    <div className="Foto-Nombre-Propuesta">
                        <h1>BY</h1>
                        <div>
                            <img src={foto} alt="" />
                            <h4>Hallax Soft Solutions.</h4>
                        </div>
                    </div>
                </div>
                <div className="Imagenes-Propuesta-Enviada">
                    <ImagenesPropuesta></ImagenesPropuesta>
                </div>
                <div className="Comentario-Propuesta-Enviada">
                    <p>Saludos Cordiales,
                        <br></br><br></br>
                        La compañía Hallax Soft Solutions, esta dispuesto 
                        crear su software, les enviamo un pre-diseño. 
                        ¡Lo hacemos a su gusto!. estamos a la orden. </p>
                </div>
                <div className="Botones-Propuesta-Enviada">
                    <div className="Acpetar-Cancelar">
                        <div className="Btn-Titulo">
                            <button><img src={Aceptar} alt="" /></button>
                            <h3>Accept</h3>
                        </div>
                        <div  className="Btn-Titulo">
                            <button><img src={Cancelar} alt="" /></button>
                            <h3>Reject</h3>
                        </div>
                    </div>
                    <div  className="Btn-Titulo">
                        <button className="Comentar"><img src={Comentar} alt="" /></button>
                        <h3>Reply</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}