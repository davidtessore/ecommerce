import "./currentPurchases.scss";
import CurrentBuyer from "./CurrentBuyer";
import CurrentItems from "./CurrentItems";

const CurrentPurchases = ({ data }) => {
    const { items, buyer, id, total, date } = data;

    return (
        <div className="currentPurchases">
            <CurrentBuyer data={buyer} />
            <h2 className="currentPurchases__title">Productos</h2>
            {items.map((item) => <CurrentItems data={item} key={item.id} />)}
            <div className="currentPurchases__generalContainer">
                <h2 className="currentPurchases__title">Detalles de la Compra</h2>
                <p className="currentPurchases__paragraph">Identificador de compra: {id}</p>
                <p className="currentPurchases__paragraph">El total de esta compra es: ${total}</p>
                <p className="currentPurchases__paragraph">Fecha de la compra: {date}</p>
            </div>
        </div>
    );
};

export default CurrentPurchases;