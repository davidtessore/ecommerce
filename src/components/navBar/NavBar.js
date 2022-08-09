import "./navBar.scss";
import Logo from "../logo/Logo";
import NavMenu from "../navMenu/NavMenu";
import Seeker from "../seeker/Seeker";
import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <Logo />
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