import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <img className="nav__img" src="/assets/ico/logo.png" alt="logo" />
                <h1 className="nav__title">Technology Center</h1>
            </div>
            <div className="nav__container2">
                <ul className="nav__menu">
                    <li className="nav__item"><button>Inicio</button></li>
                    <li className="nav__item"><button>Productos</button>
                        <ul className="nav__menu2">
                            <li className="nav__item"><button>Telefonos</button></li>
                            <li className="nav__item"><button>Pc's</button></li>
                            <li className="nav__item"><button>Tablets</button></li>
                        </ul>
                    </li>
                    <li className="nav__item"><button>Contacto</button></li>
                    <li className="nav__item"><button>Registrate</button></li>
                </ul>
                <CartWidget/>
            </div>
            
        </nav>
    );
};

export default NavBar