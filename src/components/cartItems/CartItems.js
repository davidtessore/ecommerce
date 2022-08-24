import "./cartItems.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartItems = () => {
    const { cartProduct, removeProduct } = useContext(CartContext);

    return (
        <>
            {
                cartProduct.map((product) => {
                    const productId = () => {
                        removeProduct(product.id);
                    }

                    return (
                        <div className="cartItems" key={product.id}>
                            <div className="cartItems__imgContainer">
                                <img className="cartItems__img" src={`/assets/images/${product.img1}`} alt="Imagen Producto" />
                            </div>
                            <div className="cartItems__descriptionContainer">
                                <div className="cartItems__subItemsContainer">
                                    <h2 className="cartItems__subItemsTitle">{product.title}</h2>
                                    <p className="cartItems__paragraph">{product.description}</p>
                                    <span className="cartItems__items">Cantidad: {product.quantity}</span>
                                    <span className="cartItems__items">Precio: ${product.price}</span>
                                </div>
                                <div className="cartItems__subDescriptionContainer">
                                    <span className="cartItems__items">Total de esta Compra: ${product.price * product.quantity}</span>
                                </div>
                            </div>
                            <div className="cartItems__buttonContainer">
                                <button className="cartItems__button"><Link className="cartItems__link" to={"/checkout"}>Continuar Compra</Link></button>
                                <button className="cartItems__button" onClick={productId}><Link className="cartItems__link" to={"#"}>Eliminar del Carrito</Link></button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};
export default CartItems;