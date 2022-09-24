import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useStorage } from "../../context/custom/useStorage";
import CurrentPurchases from "./CurrentPurchases";

const CurrentPurchasesContainer = ({ data }) => {
    const
        { getDataCollection } = useContext(UserContext),
        [orders, setOrders] = useStorage(sessionStorage, "Order"),
        purchases = JSON.parse(sessionStorage.getItem("Order")) || false;

    useEffect(() => {
        getDataCollection("ordenes", data)
            .then((res) => { setOrders(res) })
            .catch((e) => { })
            .finally(() => { })
    }, []);

    return (
        purchases === false
            ? <p>Espere</p>
            : <CurrentPurchases data={purchases} />
    );
};

export default CurrentPurchasesContainer;