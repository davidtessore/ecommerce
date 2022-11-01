import "./cartContainer.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Titles from "../titles/Titles";
import CartItems from "../cartItems/CartItems";
import CartOptions from "../cartOptions/CartOptions";

const CartContainer = () => {
    const
        { quantityProduct } = useContext(CartContext),
        condition = quantityProduct > 0;

    return (
        <section className="cartContainer">
            <Titles title={condition === true ? "Productos en el Carrito" : "El Carrito está Vacio"} sizeTitle={1} styleTitle={1} />
            {
                quantityProduct > 0
                    ? <>
                        <CartItems />
                        <CartOptions />
                    </>
                    : <div className="cartContainer__buttonContainer">
                        <button className="cartContainer__button"><Link className="cartContainer__link" to={"/productos"}>Comprar Algo</Link></button>
                        <button className="cartContainer__button"><Link className="cartContainer__link" to={"/"}>Ir al Inicio</Link></button>
                    </div>
            }
        </section>
    );
};

export default CartContainer;