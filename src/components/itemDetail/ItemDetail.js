import "./itemDetail.scss";
import Gallery from "../gallery/Gallery";
import SliderContainer from "../slider/SliderContainer";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ data }) => {

    const { title, description, operatingSistem, processor, cores, ram, storage, screen, graphics, keyboard, measures, weight, drums, price, } = data;

    return (
        <section className="itemDetail">
            <h1 className="itemDetail__title">{title}</h1>
            <div className="itemDetail__detail">
                <div className="itemDetail__imgContainer">
                    <Gallery data={data} />
                </div>
                <div className="itemDetail__sliderContainer">
                    <SliderContainer data={data} />
                </div>
                <div className="itemDetail__descriptionContainer">
                    <div className="itemDetail__description">
                        <h2 className="itemDetail__titleDescription">{title}</h2>
                        <p className="itemDetail__itemDescription">{description}</p>
                        <p className="itemDetail__itemDescription">{operatingSistem}</p>
                        <p className="itemDetail__itemDescription">{processor}, {cores}</p>
                        <p className="itemDetail__itemDescription">{ram}</p>
                        <p className="itemDetail__itemDescription">{storage}</p>
                        <p className="itemDetail__itemDescription">{screen}</p>
                        <p className="itemDetail__itemDescription">{graphics}</p>
                        <p className="itemDetail__itemDescription">{keyboard}</p>
                        <p className="itemDetail__itemDescription">{measures}</p>
                        <p className="itemDetail__itemDescription">{weight}</p>
                        <p className="itemDetail__itemDescription">{drums}</p>
                        <span className="itemDetail__priceDescription">{price}</span>
                    </div>
                    <div className="itemDetail__buttonContainer">
                        <ItemCount data={data} />
                        <button className="itemDetail__button">Agregar</button>
                        <button className="itemDetail__button">Comprar</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;