import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productDetail from "../utils/ProductDetail";

const ItemDetailContainer = () => {
    const [detailItem, setDetailItem] = useState([]);

    const detail = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productDetail)
        }, 2000);
    });

    useEffect(() => {
        detail
            .then((response) => { setDetailItem(response) })

            .catch((error) => { console.log("se fue todo al ping......") })

            .finally(() => { })
    }, []);
    return (
        <ItemDetail dataProducts={detailItem}/>
    );
};

export default ItemDetailContainer;