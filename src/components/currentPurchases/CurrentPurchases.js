import "./currentPurchases.scss";
import CurrentBuyer from "./CurrentBuyer";
import CurrentItems from "./CurrentItems";
import CurrentOptions from "./CurrentOptions";

const CurrentPurchases = ({ data }) => {
    const { items, buyer, id, total, date } = data;

    return (
        <div className="currentPurchases">
            <h1 className="currentPurchases__generalTitle">Detalles de tu compra: {id}</h1>
            <CurrentBuyer data={buyer} />
            <h2 className="currentPurchases__title">Productos</h2>
            {items.map((item) => <CurrentItems data={item} key={item.id} />)}
            <div className="currentPurchases__generalContainer">
                <h2 className="currentPurchases__title">Detalles de la Compra</h2>
                <div className="currentPurchases__detailContainer">
                    <p className="currentPurchases__paragraph">Identificador de compra: {id}</p>
                    <p className="currentPurchases__paragraph">El total de esta compra es: ${total}</p>
                    <p className="currentPurchases__paragraph">Fecha de la compra: {date}</p>
                </div>
            </div>
            <CurrentOptions />
        </div>
    );
};

export default CurrentPurchases;