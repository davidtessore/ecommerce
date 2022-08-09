import "./products.scss";
import CardContainer from "../../components/cardContainer/CardContainer";

const Products = ({data}) => {
    return (
        <CardContainer data={data} />
    );
};

export default Products;