import "./currentPurchases.scss";
import Titles from "../titles/Titles";

const CurrentBuyer = ({ data }) => {
    const { city, direction, mail, name, phone, postalCode, province } = data;

    return (
        <div className="currentPurchases__buyerContainer">
            <div className="currentPurchases__userContainer">
                <Titles title={"Cliente:"} sizeTitle={3} styleTitle={2} />
                <div className="currentPurchases__itemUserContainer">
                    <p className="currentPurchases__paragraph">Nombre: {name}</p>
                    <p className="currentPurchases__paragraph">Correo Electronico: {mail}</p>
                    <p className="currentPurchases__paragraph">Telefono: {phone}</p>
                </div>
            </div>
            <div className="currentPurchases__locationContainer">
                <Titles title={"Ubicación:"} sizeTitle={3} styleTitle={2} />
                <div className="currentPurchases__itemLocationContainer">
                    <p className="currentPurchases__paragraph">Provincia: {province}</p>
                    <p className="currentPurchases__paragraph">Ciudad: {city}</p>
                    <p className="currentPurchases__paragraph">Dirección: {direction}</p>
                    <p className="currentPurchases__paragraph">Codigo Postal: {postalCode}</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentBuyer;