import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useLocalStorage } from "./custom/useLocalStorage";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import dataBase from "../utils/firebaseConfig";

const
    UserContext = createContext(),
    UserProvider = ({ children }) => {
        const
            { cartProduct, totalPrice } = useContext(CartContext),
            localUser = JSON.parse(localStorage.getItem("UserId")) || false,
            [succesUser, setSuccesUser] = useLocalStorage("UserId"),
            [formUser, setFormUser] = useState({ name: "", phone: "", user: "", mail: "", password: "", confirmPassword: "", province: "", city: "", direction: "", postalCode: "" }),
            [userData, setUserData] = useState([]),
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
            currentUser = localUser.find((user) => { return user }),
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
            getUser = async () => {
                const
                    docRef = doc(dataBase, "usuario", currentUser),
                    docSnapshot = await getDoc(docRef);

                let user = docSnapshot.data();
                user.id = docSnapshot.id;

                return user
            },
            pushData = async (order) => {
                const
                    collectionOrder = collection(dataBase, "ordenes"),
                    orderDoc = await addDoc(collectionOrder, order);
                setSuccesData(orderDoc.id);
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
                userData,
                succesData,
                setUserData,
                getUser,
                userFormulary,
                change,
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