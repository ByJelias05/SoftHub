import { Branch } from "../Components/Branch"
import { Items_Historial } from "../Components/Items_Historial"
import "../Css/MyPanel.css"
import Logo from "../Images/Logo.png"

export function MyPanel(){
    return(
        <div className="Contenedor-MyPanel">
            <div className="Logo-Proyectos">
                <div className="Logo">
                      <img src={Logo} alt="" />
                </div>
                <div className="Elejir-Informacion-Proyecto">
                    <div className="Elejir-Proyecto">
                        <h3>All My Projects</h3>
                        <select name="Proyectos" id="Proyectos">
                            <option id="Proyectos" value="Giambii">Giambii</option>
                        </select>
                    </div>
                    <div className="Historial-Proyecto">
                        <h3>HISTORY OF THE <span>GIAMBII</span> APP</h3>
                        <div className="Lista-Acciones">
                            <h5 className="Fecha-Historial">miércoles, 18 de diciembre de 2024</h5>
                            <Items_Historial></Items_Historial>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Rama-Proyecto">
                <Branch></Branch>
            </div>
        </div>
    )
}