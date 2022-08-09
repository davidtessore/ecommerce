import "./cardContainer.scss";
import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";

const CardContainer = ({ data }) => {
    const
        [listProducts, setListProducts] = useState([]),
        getProducts = new Promise((resolve) => { resolve(data) });

    useEffect(() => {
        getProducts
            .then((res) => { setListProducts(res) })
            .catch(() => { })
            .finally(() => { })
    }, []);

    return (
        <section className="cardContainer">
            <ItemList dataProducts={listProducts} />
        </section>
    );
};

export default CardContainer;