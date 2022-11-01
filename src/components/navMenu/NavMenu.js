import "./navMenu.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

const NavMenu = () => {
    const
        { localUser } = useContext(UserContext),
        { listCategories } = useContext(CartContext);

    return (
        <div className="menu">
            <ul className="menu__list">
                <li className="menu__item"><Link className="menu__link" to="/">Inicio</Link></li>
                <li className="menu__itemMenu"><Link className="menu__link" to="/productos">Productos</Link>
                    <ul className="menu__menu2">
                        {listCategories.map((item) => <li className="menu__item" key={item.key}><Link className="menu__link" to={item.category}>{item.title}</Link></li>)}
                    </ul>
                </li>
                <li className="menu__item"><Link className="menu__link" to="/servicios">Servicios</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/contacto">Contacto</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/registro">{localUser === false ? "Regístrate" : "Mi Perfil"}</Link></li>
            </ul>
        </div>
    );
};

export default NavMenu