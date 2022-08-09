import "./itemListContainer.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({ data }) => {
    const
        [listProducts, setListProducts] = useState([]),
        { category } = useParams(),
        filterCategory = data.filter((products) => products.category === category),
        getProducts = new Promise((resolve) => { if (category) { resolve(filterCategory) } else { resolve(data) } });

    useEffect(() => {
        getProducts
            .then((res) => { setListProducts(res) })
            .catch(() => { })
            .finally(() => { })
    }, [category]);

    return (
        <section className="itemListContainer">
            <ItemList dataProducts={listProducts} />
        </section>
    );
};

export default ItemListContainer;