import "./cartOptions.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartOptions = () => {
    const
        { totalPrice, clearCart, quantityProduct } = useContext(CartContext),
        condition = quantityProduct > 1;

    return (
        <div className="cartOptions">
            <h2 className="cartOptions__price">Total en el Carrito: ${totalPrice}</h2>
            <button className="cartOptions__button"><Link className="cartOptions__link" to={"/checkout"}>{condition === true ? "Comprar Todo" : "Comprar"}</Link></button>
            <button className="cartOptions__button" onClick={clearCart}>{condition === true ? "Eliminar Todo" : "Eliminar"}</button>
        </div>
    );
};

export default CartOptions;