import ProductCard from "./ProductCard";

const product1 = {
    img: "pc_omen.jpg",
    title: "Hp omen",
    price: 400000,
    stock: 3,
}

const CardContainer = ({ section }) => {
    return (
        <section className="cardContainer">
            <h2 className="cardContainer__title">{section}</h2>
            <div className="cardContainer__content">
                <ProductCard data = {product1}/>
            </div>
        </section>
    );
};

export default CardContainer