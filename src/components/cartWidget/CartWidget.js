import "./cartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { quantityProduct } = useContext(CartContext);

    return (
        <div className="cartWidget">
            <p className="cartWidget__item">{quantityProduct}</p>
            <Link className="cartWidget__link" to={"/cart"}><img className="cartWidget__ico" src="/assets/ico/carrito.png" alt="logo carrito" /></Link>
        </div>
    );
};

export default CartWidget;