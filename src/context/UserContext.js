import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { collection, addDoc } from "firebase/firestore";
import dataBase from "../utils/firebaseConfig";

const
    UserContext = createContext(),
    UserProvider = ({ children }) => {
        const
            { cartProduct, totalPrice } = useContext(CartContext),
            [succesUser, setSuccesUser] = useState([]),
            [succesData, setSuccesData] = useState(),
            [formUser, setFormUser] = useState({ name: "", phone: "", user: "", mail: "", password: "", confirmPassword: "" }),
            [formLocation, setFormLocation] = useState({ province: "", city: "", direction: "", postalCode: "" }),
            [formData, setFormData] = useState({ user: "", phone: "", email: "" }),
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
            userFormulary = (e) => { setFormUser({ ...formUser, [e.target.name]: e.target.value }) },
            locationFormulary = (e) => { setFormLocation({ ...formLocation, [e.target.name]: e.target.value }) },
            sendLocal = (data) => {
                localStorage.setItem("UserId", JSON.stringify(data));
            },
            sendUser = (data) => {
                succesUser.push(setSuccesUser([...succesUser, data]));
                sendLocal(succesUser);
            },
            pushUser = async (user) => {
                const
                    collectionUser = collection(dataBase, "usuario"),
                    userDoc = await addDoc(collectionUser, user);
                sendUser(userDoc.id)
            },
            pushData = async (order) => {
                const
                    collectionOrder = collection(dataBase, "ordenes"),
                    orderDoc = await addDoc(collectionOrder, order);
                setSuccesData(orderDoc.id);
            },
            change = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
            },
            sendFormUser = (e) => {
                e.preventDefault();
                pushUser({ user: formUser, location: formLocation });
            },
            sendFormData = (e) => {
                e.preventDefault();
                pushData({ ...orderData, buyer: formData });
            },
            data = {
                formUser,
                formLocation,
                formData,
                userFormulary,
                locationFormulary,
                change,
                sendFormUser,
                sendFormData,
                succesData,
            };

        return (
            <UserContext.Provider value={data}>
                {children}
            </UserContext.Provider>
        );
    };

export default UserProvider;
export { UserContext };