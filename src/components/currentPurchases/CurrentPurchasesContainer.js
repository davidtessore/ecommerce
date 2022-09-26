import { useContext, useEffect } from "react";
import { ReturnsContext } from "../../context/ReturnsContext";
import { useStorage } from "../../context/custom/useStorage";
import CurrentPurchases from "./CurrentPurchases";
import Loading from "../loading/Loading";

const CurrentPurchasesContainer = ({ data }) => {
    const
        { getDataCollection } = useContext(ReturnsContext),
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
            ? <Loading />
            : <CurrentPurchases data={purchases} />
    );
};

export default CurrentPurchasesContainer;