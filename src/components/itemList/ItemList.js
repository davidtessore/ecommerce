import "./itemList.scss";
import { useStorage } from "../../context/custom/useStorage";
import ProductCard from "../productCard/ProductCard";

const ItemList = ({ dataProducts }) => {
    const
        [selection, setSelection] = useStorage(localStorage, "store") || false,
        filtered = (data) => {
            setSelection([...selection, data])
            //if (selection === false) {
            //    setSelection([...selection, data])
            //} else {
            //    for (let item of selection) {

            //    }
            //}
            //for (let item of selection) {
            //    if (item.id !== data.id) {
            //        setSelection([...selection, data])
            //    } else {
            //        console.log("ya esta en la lista")
            //    }
            //}
        };
    console.log(selection)

    return (
        <section className="itemList">
            {dataProducts.map((product) => <ProductCard data={product} key={product.id} filter={filtered} />)}
        </section>
    );
};

export default ItemList