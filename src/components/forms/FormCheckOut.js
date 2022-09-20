import "./form.scss";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { useStorage } from "../../context/custom/useStorage";
import { useContext, useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import dataBase from "../../utils/firebaseConfig";

const FormCheckOut = () => {
    const
        { getDataCollection, localUser } = useContext(UserContext),
        { cartProduct, totalPrice } = useContext(CartContext),
        [succesData, setSuccesData] = useStorage(localStorage, "OrderId"),
        [formData, setFormData] = useState({ user: "", password: "" }),
        [buyerUser, setBuyerUser] = useState([]),
        localOrder = JSON.parse(localStorage.getItem("OrderId")) || false,
        indexCollection = "usuario",
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
        }),
        change = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) },
        pushData = async (order) => {
            const
                collectionOrder = collection(dataBase, "ordenes"),
                orderDoc = await addDoc(collectionOrder, order);
            setSuccesData([...succesData, orderDoc.id]);
        },
        filterData = (data) => {
            if (data) {
                const { name, phone, mail, province, city, direction, postalCode } = data;
                return { name, phone, mail, province, city, direction, postalCode };
            };
        },
        sendFormData = (e) => {
            e.preventDefault();
            pushData({ ...orderData, buyer: filterData(buyerUser) });
        };

    useEffect(() => {
        getDataCollection(indexCollection, localUser)
            .then((res) => { setBuyerUser(res) })
            .catch(() => { })
            .finally(() => { })
    }, []);

    return (
        <section className="form">
            <div className="form__container">
                <h2 className="form__title">CheckOut</h2>
                <form className="form__forms" onSubmit={sendFormData}>
                    <label className="form__label">Usuario:<br /><input className="form__input" type="text" name="user" onChange={change} value={formData.user} placeholder=" Usuario" /></label>
                    <label className="form__label">Contraseña:<br /><input className="form__input" type="password" name="password" onChange={change} value={formData.password} placeholder=" Contraseña" /></label>
                    <button className="form__button" type="submit">Terminar Compra</button>
                </form>
            </div>
        </section>
    );
};

export default FormCheckOut;