import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReturnsContext } from "../../context/ReturnsContext";
import ItemList from "../../components/itemList/ItemList";

const Products = () => {
    const
        [listProducts, setListProducts] = useState([]),
        { getProductsCollection } = useContext(ReturnsContext),
        { category } = useParams();

    useEffect(() => {
        getProductsCollection(category, "productos")
            .then((res) => { setListProducts(res) })
            .catch(() => { })
            .finally(() => { })
    }, [category]);

    return (
        <ItemList data={listProducts} />
    );
};

export default Products;