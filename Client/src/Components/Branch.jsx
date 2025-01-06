import "../Css/Branch.css"

export function Branch(){
    return(
        <div className="Contenedor-Branch">
            <div className="Cabezera-Branch">
                <h3>Giambii</h3>
                <h2>App Branch</h2>
            </div>
            <div className="Contenedor-Linea-Branch">
                <div className="Linea">
                    <div className="Requirements-Analysis Derecha Complete">
                        <span>Complete</span>
                        <h1>Requirements Analysis</h1>
                    </div>
                    <div className="Software-Design Izquierda InProgress">
                        <span>Complete</span>
                        <h1>Software Design</h1>
                    </div>
                    <div className="Development-Coding Derecha NotStarted">
                        <span>Complete</span>
                        <h1>Development (Coding)</h1>
                    </div>
                    <div className="Quality-Control Izquierda NotStarted">
                        <span>Complete</span>
                        <h1>Quality Control</h1>      
                    </div>
                    <div className="Deployment-Implementation Derecha NotStarted">
                        <span>Complete</span>
                        <h1>Deployment Implementation</h1>
                    </div>
                    <div className="Maintenance-And-Support Izquierda NotStarted">
                        <span>Complete</span>
                        <h1>Maintenance And Support</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}