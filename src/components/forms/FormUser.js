import "./forms.scss";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

const FormUser = () => {
    const
        { formUser, userFormulary, sendFormUser } = useContext(UserContext),
        [currentForm, setCurrentForm] = useState(false),
        [messajePassword, setMessajePassword] = useState("Nueva Contraseña:"),
        [messajePassword2, setMessajePassword2] = useState("Confirme Contraseña:"),
        [formulary, setFormulary] = useState("formulary__label"),
        check = (e) => {
            e.preventDefault();
            if (formUser.password === formUser.confirmPassword) {
                setCurrentForm(true);
            }
            else {
                setMessajePassword("Las Contraseñas Ingresadas No Coinciden. Ingrese Nueva Contraseña");
                setMessajePassword2("Reingrese Nueva Contraseña");
                setFormulary("formulary__error");
            }
        };

    return (
        <div className="formulary">{
            currentForm === false
                ? <div className="formulary__container">
                    <h1 className="formulary__title">Ingrese sus datos Personales</h1>
                    <form className="formulary__forms" onSubmit={check}>
                        <label className="formulary__label">Nombre Completo:<br /><input className="formulary__input" type="text" name="name" value={formUser.name} placeholder="Nombre y Apellido" onChange={userFormulary} /></label>
                        <label className="formulary__label">Telefono:<br /><input className="formulary__input" type="number" name="phone" value={formUser.phone} placeholder="Telefono" onChange={userFormulary} /></label>
                        <label className="formulary__label">Nuevo Usuario:<br /><input className="formulary__input" type="text" name="user" value={formUser.user} placeholder="Nombre Usuario" onChange={userFormulary} /></label>
                        <label className="formulary__label">E-mail:<br /><input className="formulary__input" type="mail" name="mail" value={formUser.mail} placeholder="E-mail" onChange={userFormulary} /></label>
                        <label className={formulary}>{messajePassword}<br /><input className="formulary__input" type="password" name="password" value={formUser.password} placeholder="Contraseña" onChange={userFormulary} /></label>
                        <label className={formulary}>{messajePassword2}<br /><input className="formulary__input" type="password" name="confirmPassword" value={formUser.confirmPassword} placeholder="Confirmar Contraseña" onChange={userFormulary} /></label>
                        <button className="formulary__button" type="submit">Continuar</button>
                    </form>
                </div>
                : <div className="formulary__container">
                    <h1 className="formulary__title">Ingrese los datos de Región y Dirección</h1>
                    <form className="formulary__forms" onSubmit={sendFormUser}>
                        <label className="formulary__label">Provincia:<br /><input className="formulary__input" type="text" name="province" value={formUser.province} placeholder="Provincia" onChange={userFormulary} /></label>
                        <label className="formulary__label">Ciudad:<br /><input className="formulary__input" type="text" name="city" value={formUser.city} placeholder="Ciudad" onChange={userFormulary} /></label>
                        <label className="formulary__label">Direccion:<br /><input className="formulary__input" type="text" name="direction" value={formUser.direction} placeholder="Direccion" onChange={userFormulary} /></label>
                        <label className="formulary__label">Codigo Postal:<br /><input className="formulary__input" type="number" name="postalCode" value={formUser.postalCode} placeholder="Codigo Postal" onChange={userFormulary} /></label>
                        <button className="formulary__button" type="submit">Guardar</button>
                    </form>
                </div>
        }</div>
    );
};

export default FormUser;