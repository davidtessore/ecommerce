import "./itemDetail.scss";
import Gallery from "../gallery/Gallery";
import SliderContainer from "../slider/SliderContainer";
import Description from "../description/Description";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ data }) => {
    const { title } = data;

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
                    <div className="itemDetail__descriptionDetail">
                        <Description data={data} />
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