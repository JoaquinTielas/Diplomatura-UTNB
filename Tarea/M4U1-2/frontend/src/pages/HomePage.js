import { Link } from "react-router-dom";
import '../styles/HomePage.css'

const HomePage = (props) => {
    return (
        <main>
            <div>
                <div className="Home">
                    <div className="Bienv"><div className="Titulo">Bienvenido</div></div>
                    <div className="ImgPP"><Link to="Productos">Todo lo que necesitas para tu calzado</Link></div>
                    <div className="ImgS"><Link to="Servicios">Nosotros arreglamos y vos disfruta</Link></div>
                    <div className="ImgP"><Link to="Presupuestos">Consultas y presupuestos</Link></div>

                </div>
            </div>
        </main>
    );
}
export default HomePage;