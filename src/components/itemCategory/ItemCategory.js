import "./itemCategory.scss";
import Titles from "../titles/Titles";
import ProductCard from "../productCard/ProductCard";

const ItemCategory = ({ data, category, title }) => {
    const
        categories = data.filter(item => item.category === category),
        filterCategory = () => {
            if (categories.length > 0) { return true }
            else { return false }
        };

    return (
        <>{
            filterCategory() === true
                ? <div className="itemCategory">
                    <Titles title={title} sizeTitle={1} styleTitle={1} />
                    <div className="itemCategory__itemContainer">
                        {categories.map((item) => <ProductCard data={item} key={item.id} />)}
                    </div>
                </div>
                : undefined
        }</>
    );
};

export default ItemCategory;