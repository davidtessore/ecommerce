import "./navMenu.scss";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const NavMenu = () => {
    const
        { localUser } = useContext(UserContext),
        [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        try {
            if (localUser === false) {
                setCurrentUser("Regístrate")
            } else {
                setCurrentUser("Mi Perfil")
            };
        } catch (error) {
            error = "ERROR";
            setCurrentUser(error)
        }
    }, [localUser]);

    return (
        <div className="menu">
            <ul className="menu__list">
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
                <li className="menu__item"><Link className="menu__link" to="/registro">{currentUser}</Link></li>
            </ul>
        </div>
    );
};

export default NavMenu