import "./cartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { quantityProduct } = useContext(CartContext);

    return (
        <div className="cart">
            <div className="cart__quantity">
                <span className="cart__item">{quantityProduct}</span>
            </div>
            <Link className="cart__link" to={"/cart"}><img className="cart__ico" src="/assets/ico/carrito.png" alt="logo carrito" /></Link>
        </div>
    );
};

export default CartWidget;