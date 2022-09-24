import "./currentPurchases.scss";

const CurrentBuyer = ({ data }) => {
    const { city, direction, mail, name, phone, postalCode, province } = data;

    return (
        <div className="currentPurchases__buyerContainer">
            <div className="currentPurchases__userContainer">
            <h2 className="currentPurchases__title">Datos de Usuario</h2>
                <p className="currentPurchases__paragraph">{name}</p>
                <p className="currentPurchases__paragraph">{mail}</p>
                <p className="currentPurchases__paragraph">{phone}</p>
            </div>
            <div className="currentPurchases__locationContainer">
            <h2 className="currentPurchases__title">Ubicacion</h2>
                <p className="currentPurchases__paragraph">{province}</p>
                <p className="currentPurchases__paragraph">{city}</p>
                <p className="currentPurchases__paragraph">{direction}</p>
                <p className="currentPurchases__paragraph">{postalCode}</p>
            </div>
        </div>
    );
};

export default CurrentBuyer;