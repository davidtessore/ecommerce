import "./form.scss";
import { UserContext } from "../../context/UserContext";
import { ReturnsContext } from "../../context/ReturnsContext";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import Titles from "../titles/Titles";

const FormCheckOut = ({ buyerUser, orderData }) => {
    const
        { formData, change } = useContext(UserContext),
        { pushData } = useContext(ReturnsContext),
        { clearCart } = useContext(CartContext),
        [formulary, setFormulary] = useState("form__label"),
        [messaje1, setMessaje1] = useState("Usuario:"),
        [messaje2, setMessaje2] = useState("Contraseña:"),
        sendFormData = (e) => {
            e.preventDefault();
            if ((buyerUser.user === formData.user) && (buyerUser.password === formData.password)) {
                pushData("ordenes", { ...orderData, buyer: buyerUser });
                clearCart();
            } else {
                setFormulary("form__error")
                setMessaje1("Error, Reingrese Usuario")
                setMessaje2("Error, Reingrese Contraseña")
            };
        };

    return (
        <div className="form__container">
            <Titles title={"CheckOut"} sizeTitle={2} styleTitle={1} />
            <form className="form__forms" onSubmit={sendFormData}>
                <label className={formulary}>{messaje1}<br /><input className="form__input" type="text" name="user" onChange={change} value={formData.user} placeholder=" Usuario" required /></label>
                <label className={formulary}>{messaje2}<br /><input className="form__input" type="password" name="password" onChange={change} value={formData.password} placeholder=" Contraseña" required /></label>
                <button className="form__button" type="submit">Terminar Compra</button>
            </form>
        </div>
    );
};

export default FormCheckOut;