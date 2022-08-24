import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBHoLvGCOThn5kO_of3paaDqLjR8oZ8Kag",
    authDomain: "ecommerce-david-tessore.firebaseapp.com",
    projectId: "ecommerce-david-tessore",
    storageBucket: "ecommerce-david-tessore.appspot.com",
    messagingSenderId: "222726700417",
    appId: "1:222726700417:web:684a774d8db11269db7c80"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export default dataBase;