import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    //firebase 1
    apiKey: "AIzaSyBHoLvGCOThn5kO_of3paaDqLjR8oZ8Kag",
    authDomain: "ecommerce-david-tessore.firebaseapp.com",
    projectId: "ecommerce-david-tessore",
    storageBucket: "ecommerce-david-tessore.appspot.com",
    messagingSenderId: "222726700417",
    appId: "1:222726700417:web:684a774d8db11269db7c80"

    //firebase 2
    /*apiKey: "AIzaSyDEHD18LgGQGnGLru2tohWwOxphmouNH3E",
    authDomain: "e-commerce-david-tessore.firebaseapp.com",
    projectId: "e-commerce-david-tessore",
    storageBucket: "e-commerce-david-tessore.appspot.com",
    messagingSenderId: "771570121919",
    appId: "1:771570121919:web:fad6dfa155476c20ceda0a"*/
};

const
    app = initializeApp(firebaseConfig),
    dataBase = getFirestore(app);

export default dataBase;