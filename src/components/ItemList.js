import ProductCard from "./ProductCard";

const ItemList = ({ dataProducts }) => {
    return (
        <div className="itemList">
            {dataProducts.map(product => <ProductCard key={product.id} data={product} />)}
        </div>
    );
};

export default ItemList