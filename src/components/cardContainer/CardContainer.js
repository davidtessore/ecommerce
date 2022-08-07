import "./cardContainer.scss";
import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import productList from "../../utils/ProductsMock";

const CardContainer = ({ section }) => {
    const
        [listProducts, setListProducts] = useState([]),
        getProducts = new Promise((resolve) => { resolve(productList) });

    useEffect(() => {
        getProducts
            .then((res) => { setListProducts(res) })
            .catch((error) => { console.log("se fue todo al ping......") })
            .finally(() => { })
    }, []);

    return (
        <section className="cardContainer">
            <h2 className="cardContainer__title">{section}</h2>
            <ItemList dataProducts={listProducts} />
        </section>
    );
};

export default CardContainer;