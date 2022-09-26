import { CartContext } from "../../context/CartContext";
import { ReturnsContext } from "../../context/ReturnsContext";
import { useContext, useState, useEffect } from "react";
import CurrentPurchasesContainer from "../../components/currentPurchases/CurrentPurchasesContainer";
import FormCheckOut from "../../components/forms/FormCheckOut";

const CheckOut = () => {
    const
        { getDataCollection } = useContext(ReturnsContext),
        { cartProduct, totalPrice } = useContext(CartContext),
        localOrder = JSON.parse(localStorage.getItem("OrderId")) || false,
        localUser = JSON.parse(localStorage.getItem("UserId")) || false,
        [buyerUser, setBuyerUser] = useState([]),
        [orderData, setOrderData] = useState({
            items: cartProduct.map((product) => {
                return {
                    id: product.id,
                    title: product.title,
                    img: product.img1,
                    quantity: product.quantity,
                    price: product.price * product.quantity,
                }
            }),
            buyer: {},
            date: new Date().toLocaleString(),
            total: totalPrice
        });

    useEffect(() => {
        getDataCollection("usuario", localUser)
            .then((res) => { setBuyerUser(res) })
            .catch(() => { })
            .finally(() => { })
    }, []);

    return (
        <section>{
            localOrder === false
                ? <FormCheckOut buyerUser={buyerUser} orderData={orderData} />
                : <CurrentPurchasesContainer data={localOrder} />
        }</section>
    );
};

export default CheckOut;