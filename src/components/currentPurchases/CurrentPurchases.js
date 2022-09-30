import "./currentPurchases.scss";
import { useState } from "react";
import { useStorage } from "../../context/custom/useStorage";
import Status from "../status/Status";
import CurrentBuyer from "./CurrentBuyer";
import CurrentItems from "./CurrentItems";

const CurrentPurchases = ({ data }) => {
    const
        { items, buyer, id, total, date } = data,
        [saveItems, setSaveItems] = useStorage(localStorage, "shopping"),
        [state, setState] = useState(true),
        [messaje, setMessaje] = useState(""),
        savePurchase = (data) => {
            setState(false);
            setMessaje("El detalle de tu compra se ha guardado con Éxito");
            data = JSON.parse(localStorage.getItem("OrderId")) || false;
            setSaveItems([...saveItems, data]);
            sessionStorage.removeItem("Order");
            localStorage.removeItem("OrderId");
        },
        deletePurchase = () => {
            setState(false);
            setMessaje("El detalle de tu compra se ha eliminado con Éxito");
            sessionStorage.removeItem("Order");
            localStorage.removeItem("OrderId");
        };

    return (
        <>{
            state === true
                ? <div className="currentPurchases">
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
                    <div className="currentPurchases__buttonContainer" >
                        <button className="currentPurchases__button" onClick={savePurchase}>Guardar</button>
                        <button className="currentPurchases__button" onClick={deletePurchase}>Eliminar</button>
                    </div >
                </div>
                : <Status data={state} messaje={messaje} />
        }</>
    );
};

export default CurrentPurchases;