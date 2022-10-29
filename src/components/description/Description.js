import "./description.scss";
import Titles from "../titles/Titles";
import Line from "../line/Line";

const Description = ({ data }) => {
    const { description, operatingSistem, processor, cores, ram, storage, screen, graphics, keyboard, measures, weight, drums, price } = data;

    return (
        <div className="description">
            <Titles data={"Características"} typeData={2} style={1} />
            <p className="description__itemDescription">{description}</p>
            <p className="description__itemDescription">{operatingSistem}</p>
            <p className="description__itemDescription">{processor} {cores}</p>
            <p className="description__itemDescription">{ram}</p>
            <p className="description__itemDescription">{storage}</p>
            <p className="description__itemDescription">{screen}</p>
            <p className="description__itemDescription">{graphics}</p>
            <p className="description__itemDescription">{keyboard}</p>
            <p className="description__itemDescription">{measures}</p>
            <p className="description__itemDescription">{weight}</p>
            <p className="description__itemDescription">{drums}</p>
            <div className="description__priceContainer">
                <p className="description__itemPrice">Precio: ${price}</p>
                <Line data={data} />
            </div>
        </div>
    );
};

export default Description;