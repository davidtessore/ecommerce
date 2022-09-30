import { useContext, useEffect, useState } from "react";
import { ReturnsContext } from "../../context/ReturnsContext";
import { useStorage } from "../../context/custom/useStorage";
import CurrentPurchases from "./CurrentPurchases";
import Loading from "../loading/Loading";
import Status from "../status/Status";

const CurrentPurchasesContainer = ({ data }) => {
    const
        { getDataCollection } = useContext(ReturnsContext),
        [orders, setOrders] = useStorage(sessionStorage, "Order"),
        [errorState, setErrorState] = useState(false),
        purchases = JSON.parse(sessionStorage.getItem("Order")) || false;

    useEffect(() => {
        getDataCollection("ordenes", data)
            .then((res) => { setOrders(res) })
            .catch((e) => {
                e = true;
                setErrorState(e);
            })
            .finally(() => { })
    }, []);

    return (
        <>{
            errorState === false
                ? <>{
                    purchases === false
                        ? <Loading />
                        : <CurrentPurchases data={purchases} />
                }</>
                : <Status data={errorState} messaje={"mensaje de error de carga"} />
        }</>
    );
};

export default CurrentPurchasesContainer;