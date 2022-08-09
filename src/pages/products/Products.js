import "./products.scss";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Products = ({data}) => {
    return (
        <ItemListContainer data={data} />
    );
};

export default Products;