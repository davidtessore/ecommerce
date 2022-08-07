import "./navBar.scss";
import NavMenu from "../navMenu/NavMenu";
import Seeker from "../seeker/Seeker";
import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <img className="nav__img" src="/assets/ico/logo.png" alt="logo" />
                <h1 className="nav__title">Technology Center</h1>
            </div>
            <div className="nav__container2">
                <NavMenu />
                <Seeker />
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar