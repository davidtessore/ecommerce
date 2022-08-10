import "./slider.scss";

const Slider = ({ data }) => {
    const {
        img1,
        img2,
        img3,
        img4,
        img5,
    } = data;

    return (
        <div className="sliderContainer">
            <div id="slider" className="sliderContainer__slider">
                <div className="sliderContainer__section">
                    <img className="sliderContainer__img" src={`/assets/images/${img2}`} alt="Imagen Slider" />
                    <p className="sliderContainer__paragraph"></p>
                </div>
                <div className="sliderContainer__section">
                    <img className="sliderContainer__img" src={`/assets/images/${img3}`} alt="Imagen Slider" />
                    <p className="sliderContainer__paragraph"></p>
                </div>
                <div className="sliderContainer__section">
                    <img className="sliderContainer__img" src={`/assets/images/${img4}`} alt="Imagen Slider" />
                    <p className="sliderContainer__paragraph"></p>
                </div>
                <div className="sliderContainer__section">
                    <img className="sliderContainer__img" src={`/assets/images/${img5}`} alt="Imagen Slider" />
                    <p className="sliderContainer__paragraph"></p>
                </div>
                <div className="sliderContainer__section">
                    <img className="sliderContainer__img" src={`/assets/images/${img1}`} alt="Imagen Slider" />
                    <p className="sliderContainer__paragraph"></p>
                </div>
            </div>
            <div className="sliderContainer__btnContainerL">
                <img id="btnL" className="sliderContainer__btnL" src="/assets/ico/left.png" alt="Boton Left" />
            </div>
            <div className="sliderContainer__btnContainerR">
                <img id="btnR" className="sliderContainer__btnR" src="/assets/ico/rigth.png" alt="Boton Rigth" />
            </div>
        </div>
    );
};

export default Slider