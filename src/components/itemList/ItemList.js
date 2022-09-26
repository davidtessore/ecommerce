import "./itemList.scss";
import ProductCard from "../productCard/ProductCard";

const ItemList = ({ dataProducts }) => {
    return (
        <section className="itemList">
            {dataProducts.map((product) => <ProductCard data={product} key={product.id} />)}
        </section>
    );
};

export default ItemList