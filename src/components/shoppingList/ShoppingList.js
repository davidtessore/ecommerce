import "./shoppingList.scss";
import { useState, useEffect, useContext } from "react";
import { ReturnsContext } from "../../context/ReturnsContext";
import ShoppingItems from "./ShoppingItems";

const ShoppingList = ({ data }) => {
    const
        [shoppingId, setShoppingId] = useState([]),
        { getDataCollection } = useContext(ReturnsContext),
        { items, id, total, date } = shoppingId,
        [itemStore, setItemStore] = useState();

    useEffect(() => {
        getDataCollection("ordenes", data)
            .then((res) => {
                setShoppingId(res)
                setItemStore(true)
            })
            .catch((e) => { })
            .finally(() => { })
    }, []);

    return (
        <>{
            itemStore === true
                ? <>
                    <div className="shoppingList">
                        {items.map((item) => <ShoppingItems data={item} key={item.id} />)}
                        <div className="shoppingList__dataContainer">
                            <p className="shoppingList__paragraph">ID Compra: {id}</p>
                            <p className="shoppingList__paragraph">Se realizó el: {date}</p>
                            <p className="shoppingList__paragraph">Total de esta compra: ${total}</p>
                        </div>
                    </div >
                </>
                : false
        }</>
    );
};

export default ShoppingList;