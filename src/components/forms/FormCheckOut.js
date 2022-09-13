import "./forms.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const FormCheckOut = () => {
    const
        { formData, change, sendFormData } = useContext(UserContext);

    return (
        <div>
            <h1>pagina de checkOut</h1>
            <form className="forms" onSubmit={sendFormData}>
                <label>Usuario:<br /><input type="text" name="user" onChange={change} value={formData.user} placeholder="User" /></label>
                <label>Telefono:<br /><input type="number" name="phone" onChange={change} value={formData.phone} placeholder="Telefono" /></label>
                <label>E-mail:<br /><input type="email" name="email" onChange={change} value={formData.email} placeholder="E-mail" /></label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormCheckOut;