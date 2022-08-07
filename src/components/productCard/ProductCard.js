import "./productCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
    const { img1, title, price, id } = data;

    return (
        <div className="card">
            <Link to={`/productos/${id}`}>
                <div className="card__imgContainer">
                    <img className="card__img" src={`/assets/images/${img1}`} alt="Imagen Producto" />
                </div>
            </Link>
            <div className="card__contentContainer">
                <h3 className="card__title">{title}</h3>
                <span className="card__price">Precio $ {price}</span>
            </div>
        </div>
    );
};

export default ProductCard