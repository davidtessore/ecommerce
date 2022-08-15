import "./cart.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const
        { cartProduct, removeItem, clearCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h1 className="cart__title">Productos en el Carrito</h1>
            {
                cartProduct.map((product) => {
                    const productId = () => {
                        removeItem(product.id);
                    }

                    return (
                        <div className="cart__container" key={product.id}>
                            <div className="cart__imgContainer">
                                <img className="cart__img" src={`/assets/images/${product.img1}`} alt="Imagen Producto" />
                            </div>
                            <div className="cart__descriptionContainer">
                                <div className="cart__subItemsContainer">
                                    <h2 className="cart__subItemsTitle">{product.title}</h2>
                                    <p className="cart__paragraph">{product.description}</p>
                                    <span className="cart__items">Cantidad: {product.quantity}</span>
                                    <span className="cart__items">Precio: ${product.price}</span>
                                </div>
                                <div className="cart__subDescriptionContainer">
                                    <span className="cart__items">Total de esta Compra: ${product.price * product.quantity}</span>
                                </div>
                            </div>
                            <div className="cart__buttonContainer">
                                <button className="cart__button"><Link className="cart__link" to={"/checkout"}>Continuar Compra</Link></button>
                                <button className="cart__button" onClick={productId}><Link className="cart__link" to={"#"}>Eliminar del Carrito</Link></button>
                            </div>
                        </div>
                    )
                })
            }
            <h2 className="cart__content">Total en el Carrito: $</h2>
            {
                //<div className="cart__buttonContainer">
                //   <button className="cart__button"><Link to={"/checkout"}>Comprar Todo</Link></button>
                //   <button className="cart__button">Eliminar Todo</button>
                //</div>
            }
            <button className="cart__buttonCart"><Link to={"/checkout"}>Comprar Todo</Link></button>
            <button className="cart__buttonCart" onClick={clearCart}>Eliminar Todo</button>
        </div>
    );
};

export default Cart;