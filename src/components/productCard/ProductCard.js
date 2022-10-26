import "./productCard.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
    const
        { localUser } = useContext(UserContext),
        { cartProduct, setCartProduct, selection, setSelection, select, filter } = useContext(CartContext),
        { img1, title, description, price, category, id } = data,
        selectItem = () => {
            filter(selection, setSelection, data)
        },
        addItem = () => {
            data.quantity = 1;
            filter(cartProduct, setCartProduct, data)
        };

    return (
        <div className="card">
            <div className="card__cardContainer">
                <Link className="card__link" to={`/${category}/${id}`}>
                    <div className="card__imgContainer">
                        <img className="card__img" src={`/assets/images/${img1}`} alt="Imagen Producto" />
                    </div>
                </Link>
                {
                    localUser !== false
                        ? <div className="card__icoContainer">
                            <img className="card__icoImg" src={`./assets/ico/favourite/${select(data, selection) === false ? "favouriteEmpty.png" : "favouriteRed.png"}`} alt="Icono Favorito" onClick={selectItem} />
                            <img className="card__icoImg" src={`./assets/ico/carrito/${select(data, cartProduct) === false ? "carritoEmpty.png" : "carritoRed.png"}`} alt="Icono carrito" onClick={addItem} />
                        </div>
                        : null
                }
                <hr className={select(data, selection) === false ? "card__line1" : "card__line2"} />
                <div className="card__contentContainer">
                    <h3 className="card__title">{title}</h3>
                    <p className="card__paragraph">{description}</p>
                    <p className="card__price">Precio: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard