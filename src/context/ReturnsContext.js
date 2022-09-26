import { createContext } from "react";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";
import { useStorage } from "../context/custom/useStorage";
import dataBase from "../utils/firebaseConfig";

const
    ReturnsContext = createContext(),
    ReturnsProvider = ({ children }) => {
        const
            //
            [succesData, setSuccesData] = useStorage(localStorage, "OrderId"),
            pushData = async (indexCollection, order) => {
                const
                    collectionOrder = collection(dataBase, indexCollection),
                    orderDoc = await addDoc(collectionOrder, order);
                setSuccesData([...succesData, orderDoc.id]);
            },
            //
            currentData = (data) => {
                if (data !== false) { for (let users of data) { return users } }
                else { return false }
            },
            getDataCollection = async (indexCollection, data) => {
                const
                    docRef = doc(dataBase, indexCollection, currentData(data)),
                    docSnapshot = await getDoc(docRef);

                let product = docSnapshot.data();
                product.id = docSnapshot.id;

                return product
            },
            //
            getProductsCollection = async (category, indexCollection) => {
                const
                    productCollection = collection(dataBase, indexCollection),
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
            },
            data = {
                getDataCollection,
                getProductsCollection,
                pushData,
            };

        return (
            <ReturnsContext.Provider value={data}>
                {children}
            </ReturnsContext.Provider>
        );
    };

export default ReturnsProvider;
export { ReturnsContext };
