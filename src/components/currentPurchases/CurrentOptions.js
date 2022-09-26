import "./currentPurchases.scss";
import { useStorage } from "../../context/custom/useStorage";

const CurrentOptions = () => {
    const
        [saveItems, setSaveItems] = useStorage(localStorage, "shopping"),
        savePurchase = (data) => {
            data = JSON.parse(localStorage.getItem("OrderId")) || false;
            setSaveItems([...saveItems, data]);
            deletePurchase();
        },
        deletePurchase = () => {
            sessionStorage.removeItem("Order");
            localStorage.removeItem("OrderId");
        };

    return (
        <div className="currentPurchases__buttonContainer">
            <button className="currentPurchases__button" onClick={savePurchase}>Guardar</button>
            <button className="currentPurchases__button" onClick={deletePurchase}>Eliminar</button>
        </div>
    );
};

export default CurrentOptions;