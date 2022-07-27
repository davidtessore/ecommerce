import ItemCount from "./ItemCount";

const ProductCard = ({ data }) => {
    const { img, title, price, stock } = data;

    return (
        <div className="card">
            <img className="card__img" src={`/assets/images/${img}`} alt="Imagen Producto" />
            <h3 className="card__title">{title}</h3>
            <span className="card__price">Precio $ {price}</span>
            <div className="card__counter">
                <ItemCount />
                <p className="card__stock">Stock disp. {stock}</p>
            </div>
            <div className="card__buttonContainer">
                <button className="card__button">Agregar</button>
                <button className="card__button">Comprar</button>
            </div>
        </div>
    );
};

export default ProductCard