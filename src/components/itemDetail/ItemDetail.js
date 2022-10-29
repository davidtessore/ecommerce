import "./itemDetail.scss";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ReturnsContext } from "../../context/ReturnsContext";
import Titles from "../titles/Titles";
import Line from "../line/Line";
import Gallery from "../gallery/Gallery";
import SliderContainer from "../slider/SliderContainer";
import Description from "../description/Description";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = () => {
    const
        [productData, setProductData] = useState([]),
        { getDataCollection } = useContext(ReturnsContext),
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
            <Titles data={title} typeData={1} style={1} />
            <Line data={productData} />
            <div className="itemDetail__detail">
                <div className="itemDetail__imgContainer">
                    <SliderContainer data={productData} />
                    <Gallery data={productData} />
                </div>
                <div className="itemDetail__detailContainer">
                    <Description data={productData} />
                    <ItemCount data={productData} />
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;