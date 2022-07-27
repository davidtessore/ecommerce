const NavMenu = () => {
    return (
        <ul className="menu">
            <li className="menu__item"><a className="menu__link" href="#">Inicio</a></li>
            <li className="menu__itemMenu"><a className="menu__link" href="#">Productos</a>
                <ul className="menu__menu2">
                    <li className="menu__item2"><a className="menu__link2" href="#">Smartphone's</a></li>
                    <li className="menu__item2"><a className="menu__link2" href="#">Pc's</a></li>
                    <li className="menu__item2"><a className="menu__link2" href="#">Tablets</a></li>
                    <li className="menu__item2"><a className="menu__link2" href="#">Impresoras</a></li>
                    <li className="menu__item2"><a className="menu__link2" href="#">Accesorios</a></li>
                </ul>
            </li>
            <li className="menu__item"><a className="menu__link" href="#">Servicios</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Contacto</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Registrate</a></li>
        </ul>
    );
};

export default NavMenu