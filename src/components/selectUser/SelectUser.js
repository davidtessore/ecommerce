import "./selectUser.scss";
import { useContext, useState, useEffect } from "react";
import { ReturnsContext } from "../../context/ReturnsContext";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import ShoppingList from "../shoppingList/ShoppingList";
import Status from "../status/Status";

const SelectUser = () => {
    const
        localshopping = JSON.parse(localStorage.getItem("shopping")) || false,
        { getDataCollection } = useContext(ReturnsContext),
        { localUser } = useContext(UserContext),
        [userData, setUserData] = useState([]),
        [state, setState] = useState(false),
        { name, user, phone, mail, password, province, city, direction, postalCode } = userData;

    useEffect(() => {
        getDataCollection("usuario", localUser)
            .then((res) => { setUserData(res) })
            .catch((e) => {
                e = true;
                setState(e)
            })
            .finally(() => { })
    }, []);

    return (
        <section>
            <div className="selectUser">{
                state === false
                    ? <>
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
                    </>
                    : <Status data={state} messaje={"Su conexion a internet a fallado, o el Usuario ya no existe"} />
            }</div>
            {
                localshopping !== false
                    ? <>
                        <h1 className="selectUser__principalTitle">Mis compras</h1>
                        {localshopping.map(item => <ShoppingList data={item} key={item} />)}
                    </>
                    : <>
                        <h1 className="selectUser__principalTitle">No se Realizaron Compras</h1>
                        <div className="selectUser__buttonContainer">
                            <button className="selectUser__button"><Link className="selectUser__link" to={"/productos"}>Comprar Algo</Link></button>
                            <button className="selectUser__button"><Link className="selectUser__link" to={"/"}>Ir al Inicio</Link></button>
                        </div>
                    </>
            }
        </section>
    );
};

export default SelectUser;