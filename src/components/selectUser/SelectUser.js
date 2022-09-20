import "./selectUser.scss";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const SelectUser = () => {
    const
        indexCollection = "usuario",
        { localUser, getDataCollection } = useContext(UserContext),
        [userData, setUserData] = useState([]),
        { name, user, phone, mail, password, province, city, direction, postalCode } = userData;

    useEffect(() => {
        getDataCollection(indexCollection, localUser)
            .then((res) => { setUserData(res) })
            .catch((e) => {
                e = `Su conexion a Internet a Fallado o No existe ${indexCollection}`;
                console.error(e)
            })
            .finally(() => { })
    }, []);

    return (
        <section className="selectUser">
            <h1 className="selectUser__principalTitle">Mis Datos</h1>
            <div className="selectUser__containerUser">
                <h2 className="selectUser__title">Datos Usuario</h2>
                <p className="selectUser__data">Nombre: {name}</p>
                <p className="selectUser__data">Usuario: {user}</p>
                <p className="selectUser__data">Telefono: {phone}</p>
                <p className="selectUser__data">Correo: {mail}</p>
                <p className="selectUser__data">Contraseña: {password}</p>
            </div>
            <div className="selectUser__containerLocation">
                <h2 className="selectUser__title">Datos Ubicación</h2>
                <p className="selectUser__data">Provincia: {province}</p>
                <p className="selectUser__data">Ciudad: {city}</p>
                <p className="selectUser__data">Dirección: {direction}</p>
                <p className="selectUser__data">Código Postal: {postalCode}</p>
            </div>
            <div className="selectUser__containerId">
                <h2 className="selectUser__title">ID de Usuario</h2>
                <p className="selectUser__data">Identificador: {localUser}</p>
            </div>
        </section>
    );
};

export default SelectUser;