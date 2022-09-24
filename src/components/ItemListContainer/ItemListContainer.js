import "./itemListContainer.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import dataBase from "../../utils/firebaseConfig";
import ItemList from "../itemList/ItemList";

const ItemListContainer = () => {
    const
        [listProducts, setListProducts] = useState([]),
        { category } = useParams(),
        getProductsCollection = async () => {
            const
                productCollection = collection(dataBase, "productos"),
                productSnapshot = await getDocs(productCollection),
                productList = productSnapshot.docs.map((document) => {
                    let product = document.data();
                    product.id = document.id;
                    return product;
                }),
                filterCategory = productList.filter((products) => products.category === category),
                getProduct = new Promise((resolve) => {
                    if (category) {
                        resolve(filterCategory)
                    } else {
                        resolve(productList)
                    }
                });

            return getProduct;
        };

    useEffect(() => {
        getProductsCollection()
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