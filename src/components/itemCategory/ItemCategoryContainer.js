import { useEffect } from "react";
import ItemCategory from "./ItemCategory";

const ItemCategoryContainer = ({ data, category, title }) => {
    return (
        <ItemCategory data={data} category={category} title={title} />
    );
};

export default ItemCategoryContainer;