import "./productCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
    console.log(data)
    const { img1, title, description, price, category, id } = data;

    return (
        <div className="card">
            <div className="card__cardContainer">
                <Link className="card__link" to={`/${category}/${id}`}>
                    <div className="card__imgContainer">
                        <img className="card__img" src={`/assets/images/${img1}`} alt="Imagen Producto" />
                    </div>
                </Link>
                <img className="card__icoImg" src="./assets/ico/favourite/favouriteEmpty.png" alt="Icono Favorito" />
                <hr className="card__line" />
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