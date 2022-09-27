import "./navBar.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Logo from "../logo/Logo";
import NavMenu from "../navMenu/NavMenu";
import Seeker from "../seeker/Seeker";
import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
    const { quantityProduct } = useContext(CartContext);

    return (
        <nav className="nav">
            <div className="nav__container">
                <Logo />
            </div>
            <div className="nav__container2">
                <NavMenu />
                <Seeker />
            </div>
            {
                quantityProduct > 0
                    ? <div className="nav__container3">
                        <CartWidget />
                    </div>
                    : false
            }
        </nav>
    );
};

export default NavBar