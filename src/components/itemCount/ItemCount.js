import "./itemCount.scss";
import { useState } from "react";

const ItemCount = ({ data }) => {
    const
        { stock } = data,
        [counter, setCounter] = useState(1),
        add = () => { if (counter < stock) { setCounter(counter + 1) } },
        take = () => { if (counter > 0) { setCounter(counter - 1) } };

    return (
        <div className="counter">
            <div className="counter__container">
                <img className="counter__img" src="/assets/ico/menos.png" alt="Icono" onClick={take}/>
                <p className="counter__count">Prod. {counter}</p>
                <img className="counter__img" src="/assets/ico/mas.png" alt="Icono" onClick={add}/>
            </div>
            <p className="counter__stock">Stock disp. {stock}</p>
        </div>
    );
};

export default ItemCount