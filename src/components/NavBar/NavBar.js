import './NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <img src="#" alt="Logo" />
            <h1>Nombre App</h1>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button>
                    <ul>
                        <li><button>Telefonos</button></li>
                        <li><button>Pc's</button></li>
                        <li><button>Tablets</button></li>
                    </ul>
                </li>
                <li><button>Contacto</button></li>
                <li><button>Registrate</button></li>
            </ul>
        </nav>
    );
};

export default NavBar