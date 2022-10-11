import { createContext, useState } from "react";
import { useStorage } from "./custom/useStorage";
import { collection, addDoc } from "firebase/firestore";
import dataBase from "../utils/firebaseConfig";

const
    UserContext = createContext(),
    UserProvider = ({ children }) => {
        const
            [succesUser, setSuccesUser] = useStorage(localStorage, "UserId"),
            localUser = JSON.parse(localStorage.getItem("UserId")) || false,
            [formUser, setFormUser] = useState({ name: "", phone: "", user: "", mail: "", password: "", confirmPassword: "", province: "", city: "", direction: "", postalCode: "" }),
            [formData, setFormData] = useState({ user: "", password: "" }),
            userFormulary = (e) => { setFormUser({ ...formUser, [e.target.name]: e.target.value }) },
            change = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) },
            pushUser = async (indexCollection, user) => {
                const
                    collectionUser = collection(dataBase, indexCollection),
                    userDoc = await addDoc(collectionUser, user);
                setSuccesUser([...succesUser, userDoc.id]);
            },
            sendFormUser = (e) => {
                e.preventDefault();
                pushUser("usuario", formUser);
            },
            data = {
                formUser,
                formData,
                localUser,
                userFormulary,
                sendFormUser,
                change,
            };

        return (
            <UserContext.Provider value={data}>
                {children}
            </UserContext.Provider>
        );
    };

export default UserProvider;
export { UserContext };