import "./selectUser.scss";
import { useContext, useState, useEffect } from "react";
import { ReturnsContext } from "../../context/ReturnsContext";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import Titles from "../titles/Titles";
import ShoppingList from "../shoppingList/ShoppingList";
import Status from "../status/Status";

const SelectUser = () => {
    const
        localshopping = JSON.parse(localStorage.getItem("Shopping")) || false,
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
            <div className="selectUser">
                {
                    state === false
                        ? <>
                            <div className="selectUser__principalTitle">
                                <Titles title={"Mis Datos"} sizeTitle={1} styleTitle={1} />
                            </div>
                            <div className="selectUser__containerUser">
                                <Titles title={"Datos Usuario"} sizeTitle={2} styleTitle={2} />
                                <p className="selectUser__data">Nombre: {name}</p>
                                <p className="selectUser__data">Usuario: {user}</p>
                                <p className="selectUser__data">Telefono: {phone}</p>
                                <p className="selectUser__data">Correo: {mail}</p>
                                <p className="selectUser__data">Contraseña: {password}</p>
                            </div>
                            <div className="selectUser__containerLocation">
                                <Titles title={"Datos Ubicación"} sizeTitle={2} styleTitle={2} />
                                <p className="selectUser__data">Provincia: {province}</p>
                                <p className="selectUser__data">Ciudad: {city}</p>
                                <p className="selectUser__data">Dirección: {direction}</p>
                                <p className="selectUser__data">Código Postal: {postalCode}</p>
                            </div>
                            <div className="selectUser__containerId">
                                <Titles title={"ID de Usuario"} sizeTitle={2} styleTitle={2} />
                                <p className="selectUser__data">Identificador: {localUser}</p>
                            </div>
                        </>
                        : <Status data={state} messaje={"Su conexion a internet a fallado, o el Usuario ya no existe"} />
                }
            </div>
            {
                localshopping === false
                    ? <>
                        <div className="selectUser__principalTitle">
                            <Titles title={"No se Realizaron Compras"} sizeTitle={1} styleTitle={1} />
                        </div>
                        <div className="selectUser__buttonContainer">
                            <button className="selectUser__button"><Link className="selectUser__link" to={"/productos"}>Comprar Algo</Link></button>
                            <button className="selectUser__button"><Link className="selectUser__link" to={"/"}>Ir al Inicio</Link></button>
                        </div>
                    </>
                    : <>
                        <div className="selectUser__principalTitle">
                            <Titles title={"Mis compras"} sizeTitle={1} styleTitle={1} />
                        </div>
                        {localshopping.map(item => <ShoppingList data={item} key={item} />)}
                    </>
            }
        </section>
    );
};

export default SelectUser;