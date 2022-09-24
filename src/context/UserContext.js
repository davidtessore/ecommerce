import { createContext, useState } from "react";
import { useStorage } from "./custom/useStorage";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import dataBase from "../utils/firebaseConfig";

const
    UserContext = createContext(),
    UserProvider = ({ children }) => {
        const
            [succesUser, setSuccesUser] = useStorage(localStorage, "UserId"),
            [formUser, setFormUser] = useState({ name: "", phone: "", user: "", mail: "", password: "", confirmPassword: "", province: "", city: "", direction: "", postalCode: "" }),
            localUser = JSON.parse(localStorage.getItem("UserId")) || false,
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
            //
            currentData = (data) => {
                if (data !== false) { for (let users of data) { return users } }
                else { return false }
            },
            getDataCollection = async (indexCollection, data) => {
                const
                    docRef = doc(dataBase, indexCollection, currentData(data)),
                    docSnapshot = await getDoc(docRef);

                let product = docSnapshot.data();
                product.id = docSnapshot.id;

                return product
            },
            data = {
                formUser,
                localUser,
                userFormulary,
                getDataCollection,
                sendFormUser,
            };

        return (
            <UserContext.Provider value={data}>
                {children}
            </UserContext.Provider>
        );
    };

export default UserProvider;
export { UserContext };