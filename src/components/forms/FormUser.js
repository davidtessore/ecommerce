import "./form.scss";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Titles from "../titles/Titles";

const FormUser = () => {
    const
        { formUser, userFormulary, sendFormUser } = useContext(UserContext),
        [currentForm, setCurrentForm] = useState(false),
        [messajePassword, setMessajePassword] = useState("Nueva Contraseña:"),
        [messajePassword2, setMessajePassword2] = useState("Confirme Contraseña:"),
        [formulary, setFormulary] = useState("form__label"),
        check = (e) => {
            e.preventDefault();
            if (formUser.password === formUser.confirmPassword) {
                setCurrentForm(true);
            }
            else {
                setMessajePassword("Las Contraseñas Ingresadas No Coinciden. Ingrese Nueva Contraseña");
                setMessajePassword2("Reingrese Nueva Contraseña");
                setFormulary("form__error");
            }
        };

    return (
        <section className="form">{
            currentForm === false
                ? <div className="form__container">
                    <Titles title={"Ingrese sus datos Personales"} sizeTitle={2} styleTitle={1} />
                    <form className="form__forms" onSubmit={check}>
                        <label className="form__label">
                            Nombre Completo:<br />
                            <input
                                className="form__input"
                                type="text"
                                name="name"
                                value={formUser.name}
                                placeholder=" Nombre y Apellido"
                                onChange={userFormulary}
                            />
                        </label>
                        <label className="form__label">
                            Telefono:<br />
                            <input
                                className="form__input"
                                type="number"
                                name="phone"
                                value={formUser.phone}
                                placeholder=" Telefono"
                                onChange={userFormulary}
                            />
                        </label>
                        <label className="form__label">
                            Nuevo Usuario:<br />
                            <input
                                className="form__input"
                                type="text"
                                name="user"
                                value={formUser.user}
                                placeholder=" Nombre Usuario"
                                onChange={userFormulary}
                            />
                        </label>
                        <label className="form__label">
                            E-mail:<br />
                            <input
                                className="form__input"
                                type="mail"
                                name="mail"
                                value={formUser.mail}
                                placeholder=" E-mail"
                                onChange={userFormulary}
                            />
                        </label>
                        <label className={formulary}>
                            {messajePassword}<br />
                            <input
                                className="form__input"
                                type="password"
                                name="password"
                                value={formUser.password}
                                placeholder=" Contraseña"
                                onChange={userFormulary}
                            />
                        </label>
                        <label className={formulary}>
                            {messajePassword2}<br />
                            <input
                                className="form__input"
                                type="password"
                                name="confirmPassword"
                                value={formUser.confirmPassword}
                                placeholder=" Confirmar Contraseña"
                                onChange={userFormulary}
                            />
                        </label>
                        <button className="form__button" type="submit">Continuar</button>
                    </form>
                </div>
                : <div className="form__container">
                    <Titles title={"Ingrese los datos de Región y Dirección"} sizeTitle={2} styleTitle={1} />
                    <form className="form__forms" onSubmit={sendFormUser}>
                        <label className="form__label">
                            Provincia:<br />
                            <input
                                className="form__input"
                                type="text"
                                name="province"
                                value={formUser.province}
                                placeholder=" Provincia"
                                onChange={userFormulary}
                            />
                        </label>
                        <label className="form__label">
                            Ciudad:<br />
                            <input
                                className="form__input"
                                type="text"
                                name="city"
                                value={formUser.city}
                                placeholder=" Ciudad"
                                onChange={userFormulary}
                            />
                        </label>
                        <label className="form__label">
                            Direccion:<br />
                            <input
                                className="form__input"
                                type="text"
                                name="direction"
                                value={formUser.direction}
                                placeholder=" Direccion"
                                onChange={userFormulary}
                            />
                        </label>
                        <label className="form__label">
                            Codigo Postal:<br />
                            <input
                                className="form__input"
                                type="number"
                                name="postalCode"
                                value={formUser.postalCode}
                                placeholder=" Codigo Postal"
                                onChange={userFormulary}
                            />
                        </label>
                        <button className="form__button" type="submit">Guardar</button>
                    </form>
                </div>
        }</section>
    );
};

export default FormUser;