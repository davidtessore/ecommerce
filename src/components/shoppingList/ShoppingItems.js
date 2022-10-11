import "./shoppingList.scss";

const ShoppingItems = ({ data }) => {
    const { price, quantity, title, id, img } = data;

    return (
        <div className="shoppingList__listContainer">
            <div className="shoppingList__imgContainer">
                <img className="shoppingList__img" src={`./assets/images/${img}`} alt="Imagen Producto" />
            </div>
            <div className="shoppingList__descContainer">
                <p className="shoppingList__paragraph">ID Producto: {id}</p>
                <p className="shoppingList__paragraph">Producto: {title}</p>
                <p className="shoppingList__paragraph">Precio por Unidad: ${price / quantity}</p>
                <p className="shoppingList__paragraph">Cantidad: {quantity}</p>
                <p className="shoppingList__paragraph">Total: ${price}</p>
            </div>
        </div>
    );
};

export default ShoppingItems;