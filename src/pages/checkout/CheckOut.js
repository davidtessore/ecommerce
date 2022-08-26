import "./checkOut.scss";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import dataBase from "../../utils/firebaseConfig";

const CheckOut = () => {
    const
        { cartProduct, totalPrice } = useContext(CartContext),
        [succes, setSucces] = useState(),
        [formData, setFormData] = useState({
            name: "",
            phone: "",
            email: "",
        }),
        [orderData, setOrderData] = useState({
            items: cartProduct.map((product) => {
                return {
                    id: product.id,
                    title: product.title,
                    quantity: product.quantity,
                    price: product.price * product.quantity,
                }
            }),
            buyer: {},
            date: new Date().toLocaleString(),
            total: totalPrice,
        }),
        change = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        },
        push = async (order) => {
            const
                collectionOrder = collection(dataBase, "ordenes"),
                orderDoc = await addDoc(collectionOrder, order);
            setSucces(orderDoc.id);
        },
        sendForm = (e) => {
            e.preventDefault();
            push({ ...orderData, buyer: formData });
        };

    return (
        <section>
            <h1>pagina de checkOut</h1>
            <form onSubmit={sendForm}>
                <input
                    type="text"
                    name="name"
                    onChange={change}
                    value={formData.name}
                    placeholder="Nombre"
                />
                <input
                    type="number"
                    name="phone"
                    onChange={change}
                    value={formData.phone}
                    placeholder="Telefono"
                />
                <input
                    type="email"
                    name="email"
                    onChange={change}
                    value={formData.email}
                    placeholder="E-mail"
                />
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default CheckOut;