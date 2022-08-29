import '../../styles/layout.css'

import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div class="holder">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="Productos">Productos</Link></li>
                    <li><Link to="Servicios">Servicios</Link></li>
                    <li><Link to="Presupuestos">Presupuestos</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;