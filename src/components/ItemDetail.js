import Slider from "./Slider";

const ItemDetail = ({dataProducts}) => {
    return (
        <section>
            {dataProducts.map(product => <Slider data={product} key={product.id} />)}
        </section>
    );
};

export default ItemDetail;