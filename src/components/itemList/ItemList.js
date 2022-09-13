import "./itemList.scss";
import ProductCard from "../productCard/ProductCard";

const ItemList = ({ dataProducts }) => {
    return (
        <div className="itemList">
            {dataProducts.map((product) => <ProductCard data={product} key={product.id} />)}
        </div>
    );
};

export default ItemList