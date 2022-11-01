import "./itemList.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCategoryContainer from "../itemCategory/ItemCategoryContainer";

const ItemList = ({ data }) => {
    const { listCategories } = useContext(CartContext);

    return (
        <section className="itemList">
            {listCategories.map(item => <ItemCategoryContainer data={data} key={item.key} category={item.category} title={item.title} />)}
        </section>
    );
};

export default ItemList;