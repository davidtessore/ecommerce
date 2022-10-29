import "./itemList.scss";
import ProductCard from "../productCard/ProductCard";

const ItemList = ({ data }) => {
    return (
        <section className="itemList">
            {data.map((product) => <ProductCard data={product} key={product.id} />)}
        </section>
    );
};

export default ItemList;