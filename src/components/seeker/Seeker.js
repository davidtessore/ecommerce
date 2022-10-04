import "./seeker.scss";
import { useState, useEffect } from "react";
import { collection, getDocsFromServer } from "firebase/firestore";
import dataBase from "../../utils/firebaseConfig";

const Seeker = () => {
    const
        [searchTerms, setSearchTerms] = useState({ search: "" }),
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
            setSearchTerms({ ...searchTerms, [e.target.name]: e.target.value })
        },
        searchValue = () => {
            filtered(searchTerms.search)
        },
        filtered = (terms) => {
            const resultSearch = search.filter((element) => {
                if (element.brand.toString().toLowerCase().includes(terms.toLowerCase()) || element.model.toString().toLowerCase().includes(terms.toLowerCase())) {
                    return element
                }
            })
            setResult(resultSearch)
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
            <div className="seeker__imgContainer">
                <img className="seeker__img" src="/assets/ico/seeker.png" alt="Seeker ico" />
            </div>
            <div className="seeker__showSeeker">
                <input
                    className="seeker__search"
                    type="search"
                    name="search"
                    value={searchTerms.search}
                    onChange={handleChange}
                    placeholder=" Busqueda por Marca o Modelo">
                </input>
                <button className="seeker__button" onClick={searchValue}>Buscar</button>
            </div>
        </div>
    );
};

export default Seeker