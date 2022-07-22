import ProductCard from "./ProductCard";

const CardContainer = ({section}) => {
    return(
        <section>
            <h2>{section}</h2>
            <ProductCard title="producto 1" price={95000} img={"pc_omen.jpg"}/>
        </section>
    );
};

export default CardContainer