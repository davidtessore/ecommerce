import "./navMenu.scss";
import { Link } from "react-router-dom";

const NavMenu = () => {
    return (
        <ul className="menu">
            <li className="menu__item"><Link className="menu__link" to="/">Inicio</Link></li>
            <li className="menu__itemMenu"><Link className="menu__link" to="/productos">Productos</Link>
                <ul className="menu__menu2">
                    <li className="menu__item"><Link className="menu__link" to="/smartphones">Smartphone's</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/pcs">Pc's</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/tablets">Tablets</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/impresoras">Impresoras</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/accesorios">Accesorios</Link></li>
                </ul>
            </li>
            <li className="menu__item"><Link className="menu__link" to="/servicios">Servicios</Link></li>
            <li className="menu__item"><Link className="menu__link" to="/contacto">Contacto</Link></li>
            <li className="menu__item"><Link className="menu__link" to="/registro">Registrate</Link></li>
        </ul>
    );
};

export default NavMenu