import "./navBar.scss";
import Logo from "../logo/Logo";
import NavMenu from "../navMenu/NavMenu";
import Seeker from "../seeker/Seeker";
import Widget from "../widget/Widget";

const NavBar = () => {

    return (
        <header>
            <nav className="navBar">
                <Logo />
                <NavMenu />
                <Seeker />
                <Widget />
            </nav>
        </header>
    );
};

export default NavBar