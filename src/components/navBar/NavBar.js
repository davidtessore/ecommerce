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
        <header>
            <nav className="nav">
                <Logo />
                <NavMenu />
                <Seeker />
                {
                    quantityProduct > 0
                        ? <CartWidget />
                        : false
                }
            </nav>
        </header>
    );
};

export default NavBar