import "./widget.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Widget = () => {
    const { quantityProduct, quantityFavourite } = useContext(CartContext);

    return (
        <div className="widget">
            {
                quantityProduct > 0
                    ? <div className="widget__cartContainer">
                        <p className="widget__item">{quantityProduct}</p>
                        <Link className="widget__link" to={"/cart"}><img className="widget__ico" src="/assets/ico/carrito/carritoRed.png" alt="logo carrito" /></Link>
                    </div>
                    : null
            }
            {
                quantityFavourite > 0
                    ? <div className="widget__favouriteContainer">
                        <p className="widget__item">{quantityFavourite}</p>
                        <Link className="widget__link" to={"/favourite"}><img className="widget__ico" src="/assets/ico/favourite/favouriteRed.png" alt="logo favoritos" /></Link>
                    </div>
                    : null
            }
        </div>
    );
};

export default Widget;