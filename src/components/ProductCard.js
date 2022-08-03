import ItemCount from "./ItemCount";

const ProductCard = ({ data }) => {
    const { img1, title, price, stock } = data;

    return (
        <div className="card">
            <div className="card__imgContainer">
                <img className="card__img" src={`/assets/images/${img1}`} alt="Imagen Producto" />
            </div>
            <div className="card__contentContainer">
                <h3 className="card__title">{title}</h3>
                <span className="card__price">Precio $ {price}</span>
                <ItemCount stock={stock} />
            </div>
            <div className="card__buttonContainer">
                <button className="card__button">Agregar</button>
                <button className="card__button">Comprar</button>
            </div>
        </div>
    );
};

export default ProductCard