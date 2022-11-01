import "./productCard.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Titles from "../titles/Titles";
import Line from "../line/Line";

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
                            <img className="card__icoImg" src={`./assets/ico/favourite/${select(data, selection) === false ? "favouriteEmpty_2.png" : "favouriteRed_2.png"}`} alt="Icono Favorito" onClick={selectItem} />
                            <img className="card__icoImg" src={`./assets/ico/carrito/${select(data, cartProduct) === false ? "carritoEmpty_2.png" : "carritoRed_2.png"}`} alt="Icono carrito" onClick={addItem} />
                        </div>
                        : null
                }
                <Line data={data} />
                <div className="card__contentContainer">
                    <Titles title={title} sizeTitle={3} styleTitle={1} />
                    <p className="card__paragraph">{description}</p>
                    <p className="card__price">Precio: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard