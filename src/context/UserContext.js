import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useStorage } from "./custom/useStorage";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import dataBase from "../utils/firebaseConfig";

const
    UserContext = createContext(),
    UserProvider = ({ children }) => {
        const
            { cartProduct, totalPrice } = useContext(CartContext),
            localUser = JSON.parse(localStorage.getItem("UserId")) || false,
            [succesUser, setSuccesUser] = useStorage(localStorage, "UserId"),
            [formUser, setFormUser] = useState({ name: "", phone: "", user: "", mail: "", password: "", confirmPassword: "", province: "", city: "", direction: "", postalCode: "" }),
            [formData, setFormData] = useState({ user: "", phone: "", email: "" }),
            [succesData, setSuccesData] = useState(),
            [orderData, setOrderData] = useState({
                items: cartProduct.map((product) => {
                    return {
                        id: product.id,
                        title: product.title,
                        quantity: product.quantity,
                        price: product.price * product.quantity
                    }
                }),
                buyer: {},
                date: new Date().toLocaleString(),
                total: totalPrice
            }),
            userFormulary = (e) => { setFormUser({ ...formUser, [e.target.name]: e.target.value }) },
            pushUser = async (user) => {
                const
                    collectionUser = collection(dataBase, "usuario"),
                    userDoc = await addDoc(collectionUser, user);
                setSuccesUser([...succesUser, userDoc.id]);
            },
            sendFormUser = (e) => {
                e.preventDefault();
                pushUser(formUser);
            },
            pushData = async (order) => {
                const
                    collectionOrder = collection(dataBase, "ordenes"),
                    orderDoc = await addDoc(collectionOrder, order);
                setSuccesData(orderDoc.id);
            },
            currentUser = (data) => {
                if (data) { for (let users of data) { return users } }
                else { return false }
            },
            getUser = async () => {
                const
                    docRef = doc(dataBase, "usuario", currentUser(localUser)),
                    docSnapshot = await getDoc(docRef);
    
                let user = docSnapshot.data();
                user.id = docSnapshot.id;
    
                return user
            },
            change = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) },
            sendFormData = (e) => {
                e.preventDefault();
                pushData({ ...orderData, buyer: formData });
            },
            data = {
                formUser,
                localUser,
                formData,
                succesData,
                userFormulary,
                change,
                getUser,
                sendFormUser,
                sendFormData,
            };

        return (
            <UserContext.Provider value={data}>
                {children}
            </UserContext.Provider>
        );
    };

export default UserProvider;
export { UserContext };