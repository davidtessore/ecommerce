import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productList from "../../utils/ProductsMock";

const ItemDetailContainer = () => {
    const
        [productData, setProductData] = useState([]),
        { id } = useParams(),
        filterProduct = () => { productList.find((products) => { if (products.id === id) { setProductData(products) } }) },
        filtered = new Promise((resolve) => { resolve(filterProduct) });

    useEffect(() => {
        filtered
            .then((res) => { setProductData(res) })
            .catch(() => { })
            .finally(() => { })
    }, [id]);

    return (
        <ItemDetail data={productData} />
    );
};

export default ItemDetailContainer;