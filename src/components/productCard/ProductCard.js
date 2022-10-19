import "./productCard.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data, filter }) => {
    const
        localFavourite = JSON.parse(localStorage.getItem("store")) || [false],
        { img1, title, description, price, category, id } = data,
        favourite = () => {
            for (let item of localFavourite) {
                if (item === false) {
                    return false
                } else {
                    return item.id === id
                }
            }
        },
        selectItem = () => {
            filter(data)
        };

    return (
        <div className="card">
            <div className="card__cardContainer">
                <Link className="card__link" to={`/${category}/${id}`}>
                    <div className="card__imgContainer">
                        <img className="card__img" src={`/assets/images/${img1}`} alt="Imagen Producto" />
                    </div>
                </Link>
                <img className="card__icoImg" src={`./assets/ico/favourite/${favourite() === false ? "favouriteEmpty.png" : "favouriteRed.png"}`} alt="Icono Favorito" onClick={selectItem} />
                <hr className={favourite() === false ? "card__lineGrey" : "card__lineRed"} />
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