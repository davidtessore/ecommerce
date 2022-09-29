import "./itemDetail.scss";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ReturnsContext } from "../../context/ReturnsContext";
import { Link } from "react-router-dom";
import Gallery from "../gallery/Gallery";
import SliderContainer from "../slider/SliderContainer";
import Description from "../description/Description";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = () => {
    const
        [productData, setProductData] = useState([]),
        { getDataCollection } = useContext(ReturnsContext),
        [counterSelected, setCounterSelected] = useState(0),
        { id } = useParams(),
        { title } = productData;

    useEffect(() => {
        getDataCollection("productos", [id])
            .then((res) => { setProductData(res) })
            .catch(() => { })
            .finally(() => { })
    }, []);

    return (
        <section className="itemDetail">
            <h1 className="itemDetail__title">{title}</h1>
            <div className="itemDetail__detail">
                <div className="itemDetail__imgContainer">
                    <Gallery data={productData} />
                </div>
                <div className="itemDetail__sliderContainer">
                    <SliderContainer data={productData} />
                </div>
                <div className="itemDetail__descriptionContainer">
                    <div className="itemDetail__descriptionDetail">
                        <Description data={productData} />
                    </div>
                    <div className="itemDetail__counterContainer">{
                        counterSelected > 0
                            ? <div className="itemDetail__buttonContainer">
                                <button className="itemDetail__button"><Link className="counter__link" to={"/checkout"}>Terminar Compra</Link></button>
                                <button className="itemDetail__button"><Link className="counter__link" to={"/cart"}>Ir al Carrito</Link></button>
                            </div>
                            : <ItemCount data={productData} setCounterSelected={setCounterSelected} />
                    }</div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;