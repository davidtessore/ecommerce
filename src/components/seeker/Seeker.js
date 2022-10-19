import "./seeker.scss";
import { useState, useEffect } from "react";
import { collection, getDocsFromServer } from "firebase/firestore";
import dataBase from "../../utils/firebaseConfig";

const Seeker = () => {
    const
        [hidden, setHidden] = useState(false),
        [searchTerms, setSearchTerms] = useState(""),
        [search, setSearch] = useState([]),
        [result, setResult] = useState([]),
        getDataSeeker = async () => {
            const
                productCollection = collection(dataBase, "productos"),
                productSnapshot = await getDocsFromServer(productCollection),
                productList = productSnapshot.docs.map((document) => {
                    let product = document.data();
                    product.id = document.id;
                    return product;
                });
            return productList
        },
        handleChange = (e) => {
            setSearchTerms(e.target.value)
            filtered(e.target.value)
        },
        filtered = (terms) => {
            const resultSearch = search.filter((element) => {
                if (element.brand.toString().toLowerCase().includes(terms.toLowerCase()) || element.model.toString().toLowerCase().includes(terms.toLowerCase())) {
                    return element
                }
            })
            setResult(resultSearch)
        },
        hiddenSearch = () => {
            if (hidden === false) { setHidden(true) }
            else { setHidden(false) }
        };

    useEffect(() => {
        getDataSeeker()
            .then((res) => {
                setSearch(res);
            })
            .catch((e) => {
                e = "ERROR";
                setResult(e);
            })
    }, []);

    return (
        <div className="seeker">
            <div className={hidden === false ? "seeker__hidden" : "seeker__showSeeker"}>
                <input
                    className="seeker__search"
                    type="search"
                    name="search"
                    value={searchTerms}
                    onChange={handleChange}
                    placeholder=" Busqueda por Marca o Modelo">
                </input>
                <img className="seeker__img" src="/assets/ico/seeker.png" alt="Seeker ico" onClick={hiddenSearch} />
            </div>
        </div>
    );
};

export default Seeker