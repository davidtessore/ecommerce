import { useState } from 'react';

const ItemCount = ({ stock }) => {
    const
        [counter, setCounter] = useState(1),
        add = () => { if (counter < stock) { setCounter(counter + 1) } },
        take = () => { if (counter > 0) { setCounter(counter - 1) } };

    return (
        <div className="counter">
            <div className="counter__container">
                <button className="counter__button" onClick={take}>-</button>
                <p className="counter__count">Prod. {counter}</p>
                <button className="counter__button" onClick={add}>+</button>
            </div>
            <p className="counter__stock">Stock disp. {stock}</p>
        </div>
    );
};

export default ItemCount