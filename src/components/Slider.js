import { useEffect } from "react";

const Slider = ({ data }) => {
    useEffect(() => {
        const
            slider = document.querySelector("#slider"),
            btnL = document.querySelector("#btnL"),
            btnR = document.querySelector("#btnR");

        let
            sliderSection = document.querySelectorAll(".sliderContainer__section"),
            sliderSectionLast = sliderSection[sliderSection.length - 1];

        slider.insertAdjacentElement('afterbegin', sliderSectionLast);

        const
            next = () => {
                let sliderSectionFirst = document.querySelectorAll(".sliderContainer__section")[0];
                slider.style.marginLeft = "-200%";
                slider.style.transition = "all 1s";
                setTimeout(() => {
                    slider.style.transition = "none";
                    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
                    slider.style.marginLeft = "-100%";
                }, 1000)
            },
            prev = () => {
                let sliderSection = document.querySelectorAll(".sliderContainer__section");
                let sliderSectionLast = sliderSection[sliderSection.length - 1];
                slider.style.marginLeft = "0";
                slider.style.transition = "all 1s";
                setTimeout(() => {
                    slider.style.transition = "none";
                    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
                    slider.style.marginLeft = "-100%";
                }, 1000)
            };

        btnR.addEventListener("click", () => {
            next()
        });

        btnL.addEventListener("click", () => {
            prev()
        });

        /*setInterval(() => {
            next()
        }, 5000);*/
    });

    const { img1, img2, img3, img4, img5 } = data;

    return (
        <div className="sliderContainer">
            <div id="slider" className="sliderContainer__slider">
                <div className="sliderContainer__section">
                    <img className="sliderContainer__img" src={`/assets/images/${img1}`} alt="Imagen Slider" />
                    <p className="sliderContainer__paragraph"></p>
                </div>
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
            </div>
            <div className="sliderContainer__btnContainerL">
                <img id="btnL" className="sliderContainer__btnL" src="assets/ico/left.png" alt="Boton Left" />
            </div>
            <div className="sliderContainer__btnContainerR">
                <img id="btnR" className="sliderContainer__btnR" src="assets/ico/rigth.png" alt="Boton Rigth" />
            </div>
        </div>
    );
};

export default Slider