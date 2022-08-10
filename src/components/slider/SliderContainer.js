import { useEffect } from "react";
import Slider from "./Slider";

const SliderContainer = ({ data }) => {
    useEffect(() => {
        const
            slider = document.querySelector("#slider"),
            btnL = document.querySelector("#btnL"),
            btnR = document.querySelector("#btnR");

        let
            sliderSection = document.querySelectorAll(".sliderContainer__section"),
            sliderSectionLast = sliderSection[sliderSection.length - 1];

        slider.insertAdjacentElement("afterbegin", sliderSectionLast);

        const
            next = () => {
                let sliderSectionFirst = document.querySelectorAll(".sliderContainer__section")[0];
                slider.style.marginLeft = "-200%";
                slider.style.transition = "all 0.75s";
                setTimeout(() => {
                    slider.style.transition = "none";
                    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
                    slider.style.marginLeft = "-100%";
                }, 750)
            },
            prev = () => {
                let sliderSection = document.querySelectorAll(".sliderContainer__section");
                let sliderSectionLast = sliderSection[sliderSection.length - 1];
                slider.style.marginLeft = "0";
                slider.style.transition = "all 0.75s";
                setTimeout(() => {
                    slider.style.transition = "none";
                    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
                    slider.style.marginLeft = "-100%";
                }, 750)
            };

        btnR.addEventListener("click", () => { next() });
        btnL.addEventListener("click", () => { prev() });
        //setInterval(() => { next() }, 9000);
        return () => {
            btnR.removeEventListener("click", () => { next() });
            btnL.removeEventListener("click", () => { prev() });
        };
    }, []);

    return (
        <Slider data={data} />
    );
};

export default SliderContainer;