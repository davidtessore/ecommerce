import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import dataBase from "../../utils/firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const
        [productData, setProductData] = useState([]),
        { id } = useParams(),
        getProduct = async () => {
            const
                docRef = doc(dataBase, "productos", id),
                docSnapshot = await getDoc(docRef);

            let product = docSnapshot.data()
            product.id = docSnapshot.id

            return product
        };

    useEffect(() => {
        getProduct()
            .then((res) => { setProductData(res) })
            .catch(() => { })
            .finally(() => { })
    }, [id]);

    return (
        <ItemDetail data={productData} />
    );
};

export default ItemDetailContainer;