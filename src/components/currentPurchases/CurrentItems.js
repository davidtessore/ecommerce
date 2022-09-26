import "./currentPurchases.scss";

const CurrentItems = ({ data }) => {
    const { title, img, price, id, quantity } = data;

    return (
        <div className="currentPurchases__itemsContainer">
            <div className="currentPurchases__imgContainer">
                <img className="currentPurchases__img" src={`/assets/images/${img}`} alt="Imagen de producto" />
            </div>
            <h3 className="currentPurchases__title">Detalles de Producto:</h3>
            <div className="currentPurchases__characteristicContainer">
                <p className="currentPurchases__paragraph">producto: {title}</p>
                <p className="currentPurchases__paragraph">precio: ${price}</p>
                <p className="currentPurchases__paragraph">ID producto: {id}</p>
                <p className="currentPurchases__paragraph">cantidad: {quantity}</p>
            </div>
        </div>
    );
};

export default CurrentItems;