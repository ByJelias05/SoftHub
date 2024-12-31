import { Buscador } from "../Components/Buscador";
import { Sugerencia } from "../Components/Sugerencia";
import { Tendencias } from "../Components/Tendencias";
import "../Css/Search.css"
import Logo from "../Images/Logo.png"

export function Search(){
    return(
        <div className="Contenedor-Search">
            <div className="Logo-Filtro">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="Filtro-Resultados">
                    <Buscador></Buscador>
                    <div className="Filtro">
                        <h4 >For You</h4>
                        <h4 className="Select">Trending</h4>
                        <h4>News</h4>
                        <h4>Persons</h4>
                    </div>
                    <div className="Resultados">
                        <Tendencias></Tendencias>
                    </div>
                </div>
            </div>
            <div className="Sugerencia-Search">
                <div className="Programadores-Sugeridos-Search">
                    <Sugerencia></Sugerencia>
                </div>
            </div>
        </div>
    )
}