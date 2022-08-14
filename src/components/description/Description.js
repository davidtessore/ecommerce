import "./description.scss";

const Description = ({ data }) => {
    const { description, operatingSistem, processor, cores, ram, storage, screen, graphics, keyboard, measures, weight, drums, price } = data;

    return (
        <div className="description">
            <h2 className="description__titleDescription">Características</h2>
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
            <span className="description__priceDescription">Precio: ${price}</span>
        </div>
    );
};

export default Description;