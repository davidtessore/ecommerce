import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productList from "../utils/ProductsMock";

const CardContainer = ({ section }) => {
    const [listProducts, setListProducts] = useState([]);

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productList)
        }, 2000);
    });

    useEffect(() => {
        getProducts
            .then((response) => { setListProducts(response) })

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